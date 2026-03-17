import { Router } from "express";
import { requireUser } from "../middlewares/requireUser.js";
import {
  fetchUnlockAthletes,
  postUnlockAthletes,
} from "../controllers/unlockedAthletesController.js";
import { createUnlockAthleteSchema } from "../schemas/unlockAthlete.js";
import { validateBody } from "../middlewares/validateBody.js";

const router = Router();
router.get("/", requireUser, fetchUnlockAthletes);
router.post(
  "/",
  validateBody(createUnlockAthleteSchema),
  requireUser,
  postUnlockAthletes,
);

export default router;
