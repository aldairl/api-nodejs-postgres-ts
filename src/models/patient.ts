import { DataTypes } from "sequelize";
import database from "../database/connection";

export const Patient = database.define("Paciente", {
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
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});
