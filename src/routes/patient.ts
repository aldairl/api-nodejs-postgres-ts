import { Router } from "express";
import { getPatient, getPatients, createPatiente } from '../controllers/patient';

const router = Router();

router.get('/', getPatients)
router.get('/:id', getPatient)
router.post('/', createPatiente)

export default router;
