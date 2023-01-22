import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validate } from "../helpers/validate";

export const validatePatient = [
  check("ID").exists().isNumeric().isLength({ max: 20 }),
  check("FirstName").exists().not().isEmpty(),
  check("LastName").exists().not().isEmpty(),
  check("Email").exists().isEmail(),
  check("Phone").exists().not().isEmpty().isLength({ max: 20 }),
  (req: Request, res: Response, next: NextFunction) => {
    validate(req, res, next);
  },
];
