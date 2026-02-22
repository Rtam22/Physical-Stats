import { Router } from "express";
import { createAllstarTeam } from "../controllers/allstarTeamsController.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createBuildTeamSchema } from "../schemas/buildTeams.js";
import { requireUser } from "../middlewares/requireUser.js";
import { fetchAllstarTeams } from "../controllers/allstarTeamsController.js";

const router = Router();

router.post(
  "/",
  validateBody(createBuildTeamSchema),
  requireUser,
  createAllstarTeam,
);

router.get("/", fetchAllstarTeams);

export default router;
