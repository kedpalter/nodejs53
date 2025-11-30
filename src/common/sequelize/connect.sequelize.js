import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../constant/app.constant.js";

export const sequelize = new Sequelize(DATABASE_URL, {/*  */ }) // mysql://root:[docker-password]@[ip-localhost]:[port-to-docker]/[database-name]

try {
    await sequelize.authenticate();
    console.log('[SEQUELIZE] Connection has been established successfully.');
} catch (error) {
    console.error('[SEQUELIZE] Unable to connect to the database:', error);
}
