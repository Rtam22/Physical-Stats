import { Router } from "express";
import { createBuildTeams } from "../controllers/buildTeamsController.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createSubmissionSchema } from "../schemas/submissions.js";
import { requireUser } from "../middlewares/requireUser.js";

const router = Router();

router.post(
  "/",
  validateBody(createSubmissionSchema),
  requireUser,
  createBuildTeams,
);

export default router;
