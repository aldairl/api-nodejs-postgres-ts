import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error: any) {
    res.status(403);
    res.send({ error: error.array() });
  }
};
