import { Router } from "express";
import patientRoute from "./patient";
const router = Router();

router.use("/paciente", patientRoute);

export default router;
