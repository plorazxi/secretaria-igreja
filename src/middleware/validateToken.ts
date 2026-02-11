import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../lib/env.js";

export const validateToken = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        let token: string;
        if (req.params.token) {
            token = req.params.token as string;
        } else if (req.body.token) {
            token = req.body.token as string;
        } else {
            return res.status(401).send({
                msg: "Token não encontrado"
            });
        }
        jwt.verify(token, env.SERVER_SECRETKEY, (err, decoded) => {
            if(err) {
                return res.status(401).send({
                    msg: "Token inválido",
                    error: err
                });
            }
            next()
        })
    };
};