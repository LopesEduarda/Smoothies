import { MenuDataBase } from './../data/MenuDataBase';
import { inputOrder, userOrder } from './../model/menu';
import { UserData } from "../data/UserDataBase";
import { CustomError } from '../error/CustomError';

export class OrderBusiness {
    constructor(
        private userData: UserData,
        private menuData: MenuDataBase
    ) { };

    order = async (data: inputOrder) => {
        try {
            const { customer_name, item_menu_name, allergicIngredient } = data;
            // campos que serão recebidos no body da requisição pelo cliente. o campo allergicIngredient é opcional
            if (!customer_name || !item_menu_name) {
                throw new CustomError(401, `Customer name and Item Menu Name has to be informed!`);
            }
            // validando que os campos customer name e item menu name serão preenchidos, caso não sejam, retornará um erro avisando
            const smoothieExists = await this.menuData.getSmoothieByName(item_menu_name)
            // acessando o método getSmoothieByName que está dentro de menu data e passando o 'item_menu_name' que será preenchido pelo usuário
            if (!smoothieExists) {
                throw new CustomError(404, `Smoothie was not found! Please, choose one of these: Clássico, Freezie, Greenie or Apenas Sobremesas.`);
            };
            // se o usuário passar o nome de um smoothie que não existe em nosso cardápio, retornará um erro ao usuário o avisando sobre isso
            const orderByName = await this.menuData.getSmoothieByName(item_menu_name)
            const arrayIngredients = orderByName.ingredients.split(', ')
            const ingredientExists: string[] = []
            // novamente acessando o menuData para ter acesso ao getSmoothieByName, pegando os ingredientes desse smoothie, transformando-o em um array 
            // para poder usar o indexOf e outros métodos próprios para array
            allergicIngredient?.forEach((ingredient) => {
                const index = arrayIngredients.indexOf(ingredient)
                if (index !== -1) {
                    ingredientExists.push(arrayIngredients[index])
                    arrayIngredients.splice(index, 1)
                }
            })
            // aqui, percorremos o array de ingredientes para ver se há algum ingrediente que seja igual ao que o usuário é alérgico. caso já, o removemos pelo index com o splice
            // o push no ingredientExists é porque o usarei novamente logo abaixo para retornar 
            const arrayIngredientsJoin = allergicIngredient ? arrayIngredients?.sort().join(', ') : ''
            // verificando se há algum allergicIngredient, se há, transformará numa lista de strings novamente
            // usando o método sort no arrayIngredients para ordenar os ingredientes
            const newOrder = new userOrder(item_menu_name, customer_name, arrayIngredientsJoin);
            await this.userData.order(newOrder)
            // passando os itens que formarão o pedido
            return `Ingredients to put in the machine: ${arrayIngredientsJoin}, 
                    Ingredients to remove from the smoothie as the customer is allergic: ${ingredientExists.length !== 0 ? ingredientExists : 'Nenhum ingrediente para remover'}`
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }


}