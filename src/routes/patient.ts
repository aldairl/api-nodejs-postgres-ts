import { Router } from "express";
import { getPatientC, getPatientsC, createPatienteC } from '../controllers/patient';
import { validatePatient } from "../validators/patient";

const router = Router();

router.get('/', getPatientsC)
router.get('/:id', getPatientC)
router.post('/', validatePatient ,createPatienteC)

export default router;
