import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { createUserSchema } from "../schemas/users.js";
import { createUser } from "../controllers/usersController.js";

const router = Router();

router.post("/", validateBody(createUserSchema), createUser);

export default router;
