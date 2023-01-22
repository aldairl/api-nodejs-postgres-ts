import { Router } from "express";
import { getPatient, getPatients, createPatiente } from '../controllers/patient';
import { validatePatient } from "../validators/patient";

const router = Router();

router.get('/', getPatients)
router.get('/:id', getPatient)
router.post('/', validatePatient ,createPatiente)

export default router;
