export class SmoothieMenu {
    constructor(
        private id: string,
        private name: string,
        private ingredients: string
    ) { };

    public getId = (): string => {
        return this.id;
    }
    public getName = (): string => {
        return this.name;
    }
    public getIngredients = (): string => {
        return this.ingredients
    }
}

export type itemMenuSmoothie = {
    name: string,
    ingredients: string
}


export class userOrder {
    constructor(
        private item_menu_name: string,
        private customer_name: string,
        private allergicIngredient: string | ''
    ) { };

    public getItemMenuId = (): string => {
        return this.item_menu_name;
    }

    public getCustomerName = (): string => {
        return this.customer_name;
    }

    public getAllergicIngredient = (): string => {
        return this.allergicIngredient;
    }
}


export type inputOrder = {
    customer_name: string,
    item_menu_name: string,
    allergicIngredient?: string[]
}