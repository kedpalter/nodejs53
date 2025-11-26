import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('mysql://root:qweasd@127.0.0.1:3307/cassini_community', {/*  */ }) // mysql://root:[docker-password]@[ip-localhost]:[port-to-docker]/[database-name]

try {
    await sequelize.authenticate();
    console.log('[SEQUELIZE] Connection has been established successfully.');
} catch (error) {
    console.error('[SEQUELIZE] Unable to connect to the database:', error);
}
