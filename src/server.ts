import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config/environment";
import database from "./database/connection";

export default class Server {
  public app: express.Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = PORT;

    // initial methods
    this.dbConnection();
    this.middlewares();
  }

  public start(callBack: Function) {
    this.app.listen(callBack);
  }

  async dbConnection() {
    try {
      await database.authenticate();
      console.log("Database's connection stablished successfully");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
  }

  routes() {
    // this.app.use(this.apiPaths.usuarios, userRoutes)
  }
}
