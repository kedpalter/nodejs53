import 'dotenv/config'

export const DATABASE_URL = process.env.DATABASE_URL;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_PORT = process.env.DATABASE_PORT;


console.log("\n", {
    DATABASE_URL,
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    DATABASE_PORT
}, "\n");