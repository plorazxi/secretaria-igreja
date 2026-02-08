import type { NextFunction, Request, Response } from "express";
import type { z } from "zod";

export const validateSchema = (schema: z.ZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const result =  await schema.safeParseAsync(req.body);
        if (!result.success) {
            return res.status(401).send({
                msg: "Dados inválidos",
                error: result.error.format()
            });
        }
        req.body = result.data
        next();
    };
};