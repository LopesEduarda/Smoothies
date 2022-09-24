import { SmoothieMenu } from './../model/menu';
import BaseDatabase from './BaseDatabase';
import { CustomError } from "../error/CustomError";

export class MenuDataBase extends BaseDatabase {
    createSmoothie = async (data: SmoothieMenu) => {
        try {
            await MenuDataBase
                .connection('smoothiesMenu')
                .insert({
                    id: data.getId(),
                    name: data.getName(),
                    ingredients: data.getIngredients()
                })
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    getSmoothieByName = async (name: string) => {
        try {
            const smoothie = await MenuDataBase.connection('smoothiesMenu')
                .select()
                .where({ name })
            return smoothie[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    getSmoothies = async () => {
        try {
            const smoothies = await MenuDataBase.connection('smoothiesMenu')
                .select();
            return smoothies;
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

}
