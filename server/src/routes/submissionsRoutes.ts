import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { requireUser } from "../middlewares/requireUser.js";
import {
  createSubmission,
  fetchSubmissions,
} from "../controllers/submissionsController.js";
import { createSubmissionSchema } from "../schemas/submissions.js";

const router = Router();

router.post(
  "/",
  validateBody(createSubmissionSchema),
  requireUser,
  createSubmission,
);

router.get("/", fetchSubmissions);
export default router;
