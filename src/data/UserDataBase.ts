import BaseDatabase from "./BaseDatabase";
import { CustomError } from "../error/CustomError";
import { userOrder } from "../model/menu";


export class UserData extends BaseDatabase {
    order = async (input: userOrder) => {
        try {
            await UserData.connection('customerSmoothieOrder')
                .insert({
                    customer_name: input.getCustomerName(),
                    allergicIngredient: input.getAllergicIngredient(),
                    item_menu_name: input.getItemMenuId()
                })
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }
}