import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export default class BaseDatabase{
    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA
        }
    });
    // desconectar com o banco de dados
    public static async destroyConnection():Promise<void> {
        if(BaseDatabase.connection) {
            await BaseDatabase.connection.destroy()
        }
    }
}



