import { MenuDataBase } from './MenuDataBase';
import BaseDatabase from "./BaseDatabase";

class Migrations extends BaseDatabase {
    private static smoothiesMenu = "smoothiesMenu"
    private static customerSmoothieOrder = "customerSmoothieOrder"

    async createTables() {
        try {
            await MenuDataBase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${Migrations.smoothiesMenu} (
                id VARCHAR(255) NOT NULL,
                name VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
                ingredients text not null
            );
                       
            
            CREATE TABLE IF NOT EXISTS ${Migrations.customerSmoothieOrder} (
                customer_name VARCHAR(255) NOT NULL,
                allergicIngredient VARCHAR(255) DEFAULT '',
                item_menu_name VARCHAR(255) NOT NULL,
                foreign key (item_menu_name) references smoothies(name)
            );            
            `)

            console.log(`A tabela ${Migrations.smoothiesMenu} e ${Migrations.customerSmoothieOrder} foram criadas com sucesso!`)
        } catch (error: any) {
            console.log(error.sqlMessage)
        } finally {
            BaseDatabase.destroyConnection()
        }
    }
}
// instanciando migrations
new Migrations().createTables();