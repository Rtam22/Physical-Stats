import { Router } from "express";
import { requireUser } from "../middlewares/requireUser.js";
import { fetchUnlockAthletes } from "../controllers/unlockedAthletesController.js";

const router = Router();
router.get("/", requireUser, fetchUnlockAthletes);

export default router;
