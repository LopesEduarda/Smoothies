import { UserData } from '../src/data/UserDataBase';
import { OrderBusiness } from "../src/business/OrderBusiness";
import { MenuDataBase } from "../src/data/MenuDataBase";

const OrderBusinessMock = new OrderBusiness(
    new UserData(),
    new MenuDataBase()
)

const orderInput = {
    customer_name: 'Eduarda',
    item_menu_name: 'Freezie',
    allergicIngredient: ['morango']
}

describe('test class OrderBusiness', () => {
    describe('test', () => {
        test('test order smoothie name exists with a correct name', async () => {
            try {
                orderInput.item_menu_name = 'Freezie'
                await OrderBusinessMock.order(orderInput)
            } catch (error: any) {
                orderInput.item_menu_name = 'Freezie'
                expect(error.message).toBe('Não existe um smoothie com esse nome em nosso cardápio')
            }
        })
    })
    // aqui estou testando se preenchendo o nome do item correto do cardápio, o teste passará.  

    describe('test', () => {
        test('test order smoothie name exists with a name that doesnot exists', async () => {
            try {
                orderInput.item_menu_name = 'Freeziee'
                await OrderBusinessMock.order(orderInput)
            } catch (error: any) {
                orderInput.item_menu_name = 'Freezie'
                expect(error.message).toBe('Não existe um smoothie com esse nome em nosso cardápio!')
            }
        })
    })
    // aqui estou testando com um 'e' a mais no Freezie, portanto, este teste falhará.

    describe('test', () => {
        test('test order smoothie without a customer name', async () => {
            try {
                orderInput.customer_name = 'Eduarda'
                await OrderBusinessMock.order(orderInput)
            } catch (error: any) {
                orderInput.customer_name = 'Eduarda'
                expect(error.message).toBe('É necessário preencher o campo customer name')
            }
        })
    })
    // aqui estou testando se preenchendo o nome do cliente, o teste passará.  

    describe('test', () => {
        test('test order smoothie without a customer name', async () => {
            try {
                orderInput.customer_name = 'Eduarda'
                await OrderBusinessMock.order(orderInput)
            } catch (error: any) {
                orderInput.customer_name = 'Eduarda'
                expect(error.message).toBe('É necessário preencher o campo customer name')
            }
        })
    })
    // aqui estou testando se, caso não preencher o nome do customer, o teste falhará.
})