import { Request, Response } from "express";
import { responses } from "../helpers/responses";
import { createPatient, getPatients } from "../services/patient";

export const getPatientsC = async (req: Request, res: Response) => {
  try {
    const patients = await getPatients();
    responses.success(req, res, patients);
  } catch (error: any) {
    responses.error(req, res, error);
  }
};

export const getPatientC = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const patients = {
      msg: "getPatient",
      id,
    };
    responses.success(req, res, patients);
  } catch (error: any) {
    responses.error(req, res, error);
  }
};

export const createPatienteC = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const patient = await createPatient(body);
    responses.success(req, res, patient);
  } catch (error: any) {
    error.message = `El paciente no pudo ser registrado. ${error.message}`;
    responses.error(req, res, error);
  }
};
