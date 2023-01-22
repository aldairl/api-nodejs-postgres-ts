import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "../config/environment";

import database from "../database/connection";
import routerPatient from "../routes/patient";

// models
import "./patient";

export default class Server {
  private app: express.Application;
  private port: number;
  private apiRoutes = {
    patients: "/api/pacientes",
  };

  constructor() {
    this.app = express();
    this.port = PORT;

    // initial methods
    this.dbConnection();
    this.middlewares();

    // routes
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server is running in port", this.port);
    });
  }

  async dbConnection() {
    try {
      await database.sync({ alter: true });
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
    this.app.use(this.apiRoutes.patients, routerPatient);
  }
}
