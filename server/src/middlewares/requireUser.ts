import type { NextFunction, Request, Response } from "express";

export function requireUser(req: Request, res: Response, next: NextFunction) {
  const userIdHeader = req.headers["user-id"];
  if (typeof userIdHeader !== "string") {
    return res.status(400).json({
      error: "Missing user-id header",
    });
  }

  req.userId = userIdHeader;
  next();
}
