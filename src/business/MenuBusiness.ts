import { itemMenuSmoothie, SmoothieMenu } from './../model/menu';
import { CustomError } from "../error/CustomError";
import { MenuDataBase } from "../data/MenuDataBase";
import IdGenerator from "../services/IdGenerator";


export class MenuBusiness {
    constructor(
        private menuData: MenuDataBase,
        private idGenerator: IdGenerator
    ) { };

    createSmoothie = async (data: itemMenuSmoothie) => {
        try {
            const { name, ingredients } = data;
            const id = this.idGenerator.generateId();
            const newSmoothie = new SmoothieMenu(
                id,
                name,
                ingredients
            );
            await this.menuData.createSmoothie(newSmoothie)
            return newSmoothie;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    getAllSmoothies = async () => {
        try {
            const smoothies = await this.menuData.getSmoothies();
            return smoothies;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    getSmoothieByName = async (name: string) => {
        try {
            const smoothie = await this.menuData.getSmoothieByName(name);
            return smoothie;
        } catch (error) {
            
        }
    }


}
