import * as dotenv from 'dotenv'
dotenv.config()

export const PORT: number = Number(process.env.PORT || 5000);
export const POSTGRES_DB: string = process.env.POSTGRES_DB || "postgres";
export const POSTGRES_USER: string = process.env.POSTGRES_USER || "postgres";
export const POSTGRES_PASSWORD: string = process.env.POSTGRES_PASSWORD || "123456";
export const DB_HOST: string = process.env.DB_HOST || "localhost";
