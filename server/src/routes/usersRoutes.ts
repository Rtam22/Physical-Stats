import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { requireUser } from "../middlewares/requireUser.js";
import { createUserSchema } from "../schemas/users.js";
import { createUser } from "../controllers/usersController.js";

const router = Router();

router.post("/", validateBody(createUserSchema), requireUser, createUser);

export default router;
