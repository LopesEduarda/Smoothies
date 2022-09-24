import { MenuDataBase } from './../data/MenuDataBase';
import { MenuBusiness } from './../business/MenuBusiness'; import { Request, Response } from "express";

export class MenuController {
    constructor(
        private MenuBusiness: MenuBusiness,
        private MenuData: MenuDataBase
    ) { };

    createSmoothie = async (req: Request, res: Response) => {
        try {
            const { name, ingredients } = req.body
            const data = { name, ingredients };

            const result = await this.MenuBusiness.createSmoothie(data)
            res.status(201).send(result);
        } catch (error) {

        }
    }

    getAllSmoothies = async (req: Request, res: Response) => {
        try {
            const results = await this.MenuBusiness.getAllSmoothies();
            res.status(200).send(results);
        } catch (error: any) {
            const { statusCode, message } = error;
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`);
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }

    getSmoothieByName = async (req: Request, res: Response) => {
        try {
            const name  = req.query.name as string

            const results = await this.MenuBusiness.getSmoothieByName(name);
            res.status(200).send(results);
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