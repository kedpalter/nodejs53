import "../constant/app.constant.js"
import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from './generated/prisma/index.js';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USER } from "../constant/app.constant.js";

const adapter = new PrismaMariaDb({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    port: DATABASE_PORT,
    connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });

export { prisma }