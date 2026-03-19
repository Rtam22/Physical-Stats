import express from "express";
import { prisma } from "./database/prisma.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import submissionsRoutes from "./routes/submissionsRoutes.js";
import allstarTeamsRoutes from "./routes/allstarTeamsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import cors from "cors";
import unlockAthletesRoutes from "./routes/unlockAthletesRoutes.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/db-test", async (_req, res) => {
  const count = await prisma.user.count();
  res.json({ users: count });
});

app.use("/submissions", submissionsRoutes);
app.use("/allstarTeams", allstarTeamsRoutes);
app.use("/users", usersRoutes);
app.use("/unlockedAthletes", unlockAthletesRoutes);

app.use(errorHandler);
