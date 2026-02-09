import express from "express";
import { prisma } from "./database/prisma.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import submissionsRoutes from "./routes/submissionsRoutes.js";
import buildTeamsRoutes from "./routes/buildTeamsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/db-test", async (_req, res) => {
  const count = await prisma.user.count();
  res.json({ users: count });
});

app.use("/submissions", submissionsRoutes);
app.use("/buildTeams", buildTeamsRoutes);
app.use("/users", usersRoutes);

app.use(errorHandler);
