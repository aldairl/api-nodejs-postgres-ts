import { Request, Response } from "express";

export const getPatients = (req: Request, res: Response) => {
  res.json({ msg: "getPatients" });
};

export const getPatient = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "getPatient",
    id,
  });
};

export const createPatiente = (req: Request, res: Response) => {
  const { body } = req;

  res.json({
    msg: "createPatient",
    body,
  });
};
