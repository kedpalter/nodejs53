import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import "dotenv/config";
import "../constant/app.constant.js";
import { DATABASE_URL } from "../constant/app.constant.js";
import { PrismaClient } from './generated/prisma/index.js';

const url = new URL(DATABASE_URL)

const adapter = new PrismaMariaDb({
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.substring(1), // include "/..." → substring(1)
    port: url.port,
    connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });

export { prisma };
