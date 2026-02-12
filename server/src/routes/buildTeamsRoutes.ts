import { Router } from "express";
import { createBuildTeams } from "../controllers/buildTeamsController.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createBuildTeamSchema } from "../schemas/buildTeams.js";
import { requireUser } from "../middlewares/requireUser.js";

const router = Router();

router.post(
  "/",
  validateBody(createBuildTeamSchema),
  requireUser,
  createBuildTeams,
);

export default router;
