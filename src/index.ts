import { OrderBusiness } from './business/OrderBusiness';
import { MenuDataBase } from './data/MenuDataBase';
import { MenuController } from './controller/MenuController';
import { app } from "./controller/app";
import express from "express";
import cors from "cors";
import { MenuBusiness } from "./business/MenuBusiness";
import IdGenerator from './services/IdGenerator';
import { UserData } from './data/UserDataBase';
import { OrderController } from './controller/OrderController';

app.use(express.json());
app.use(cors());

const menuItemBusiness = new MenuBusiness(
    new MenuDataBase(),
    new IdGenerator()
)

const menuController = new MenuController(
   menuItemBusiness,
   new MenuDataBase()
)

const orderBusiness = new OrderBusiness(
    new UserData(),
    new MenuDataBase
)

const orderController = new OrderController(
  orderBusiness
)

// para adicionar itens ao menu
app.post("/additemmenu", menuController.createSmoothie)

// para realizar um pedido
app.post("/order", orderController.order)

// para pegar todos os smoothies do menu
app.get("/getsmoothies", menuController.getAllSmoothies)

// para pegar um pedido específico
app.get("/getsmoothiebyname", menuController.getSmoothieByName)