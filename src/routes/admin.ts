import express from "express";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../lib/env.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { loginSchema } from "../interfaces/adminInterface.js";

const router = express.Router();

// Rota de realização de login do administrador
router.post('/login', validateSchema(loginSchema), async (req, res) => {
    const { login, password } = req.body;
    if(login !== env.ADMIN_LOGIN) {
        return res.status(401).send({
            msg: "Login inválido"
        });
    } else if (!await compare(password, env.ADMIN_PASSWORD_HASH)) {
        return res.status(401).send({
            msg: "Senha incorreta"
        });
    } else {
        let token = jwt.sign({
                login: login,
                password: env.ADMIN_PASSWORD_HASH
            }, env.SERVER_SECRETKEY, {
                algorithm: 'HS256',
                expiresIn: '1h'
        });
        return res.status(200).send({
            msg: "Login efetuado com sucesso",
            token: token
        });
    }
});

export default router;