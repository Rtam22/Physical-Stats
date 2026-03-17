import { Request, Response, NextFunction } from "express";

type SafeParseResult<T> =
  | { success: true; data: T }
  | { success: false; error: unknown };

type SchemaWithSafeParse<T> = {
  safeParse: (input: unknown) => SafeParseResult<T>;
};

export function validateBody<T>(schema: SchemaWithSafeParse<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: "Invalid Input",
        details: parsed.error,
      });
    }
    req.validatedBody = parsed.data;
    next();
  };
}
