import express from "express";
import { validateToken } from "../middleware/validateToken.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { createUserSchema } from "../interfaces/usersInterfaces.js";
import { prisma } from "../lib/prismaClient.js";

const router = express.Router();

router.get("/:token", validateToken(), async (req, res) => {
    let users = await prisma.cliente.findMany();
    return res.status(200).send(users)
});

router.post("/create", validateSchema(createUserSchema), validateToken(), async (req, res) => {
    try {
        const {token, ...user} = req.body
        await prisma.cliente.create({
            data: user
        });
        return res.status(200).send({
            msg: "Usuário criado com sucesso",
        });
    } catch (err) {
        console.log(err)
        return res.status(400).send({
            msg: "Erro ao adicionar usuário no banco de dados",
            error: err
        });
    }
});

export default router;