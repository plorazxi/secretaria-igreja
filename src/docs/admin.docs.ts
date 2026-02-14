import z from "zod";
import { loginSchema } from "../interfaces/adminInterface.js";
import { registry } from "../lib/openApiGenerator.js";

registry.registerPath({
    method: "post",
    path: "/admin/login",
    description: "Realiza o login",
    request: {
        body: {
            content:{
                "application/json": {
                    schema: loginSchema
                }
            }
        }
    },
    responses: {
        200: {
            description: "Login realizado com sucesso",
            content: {
                "application/json": {
                    schema: z.object({
                        msg: z.string(),
                        token: z.jwt({ alg: "HS256"})
                    })
                }
            }
        },
        401: {
            description: "Erro ao realizar login",
            content: {
                "application/json": {
                    schema: z.object({
                        msg: z.string()
                    }),
                    examples: {
                        "Login Inválido": {
                            summary: "Login incorreto"
                        },
                        "Senha Iválida": {
                            summary: "Senha incorreta"
                        }
                    }
                }
            }
        }
    }
})