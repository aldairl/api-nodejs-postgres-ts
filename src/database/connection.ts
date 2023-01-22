import { Sequelize } from "sequelize";
import {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  DB_HOST,
} from "../config/environment";

const database = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
});

export default database;
