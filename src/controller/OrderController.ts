import { OrderBusiness } from "../business/OrderBusiness";
import { Request, Response } from "express";
import { inputOrder } from "../model/menu";

export class OrderController {
    constructor(
        private orderBusiness: OrderBusiness
    ) { };

    order = async (req: Request, res: Response) => {
        try {
            const { customer_name, item_menu_name, allergicIngredient } = req.body;

            const data: inputOrder = {
                customer_name,
                item_menu_name,
                allergicIngredient
            }

            const result = await this.orderBusiness.order(data);
            res.status(200).send(result);
        } catch (error: any) {
            const { statusCode, message } = error;
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`);
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }

}