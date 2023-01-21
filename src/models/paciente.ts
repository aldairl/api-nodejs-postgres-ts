import { DataTypes } from "sequelize";
import database from "../database/connection";

export const Patient = database.define("pacientes", {
  PatientID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID: {
    type: DataTypes.STRING(20),
  },
  FirstName: {
    type: DataTypes.STRING,
  },
  LastName: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
  },
  Phone: {
    type: DataTypes.STRING(20),
  },
});
