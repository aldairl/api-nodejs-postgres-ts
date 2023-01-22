import httpStatus from "http-status";
import ApiError from "../helpers/apiError";
import { IPatient } from "../interfaces/patient";
import { Patient } from "../models/patient";

export const createPatient = async (patient: IPatient) => {
  const { ID } = patient;
  const patientExist = await Patient.findOne({ where: { ID } });

  if (patientExist)
    throw new ApiError(
      httpStatus.CONFLICT,
      `Ya existe un paciente con el id: ${ID}`
    );

  const patientRegistered = await Patient.create({ ...patient });

  return patientRegistered;
};

export const getPatients = async () => {
  const patients = await Patient.findAll({});
  return patients;
};
