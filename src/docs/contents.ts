import z from "zod";

export const sucessfullContent = {
    "application/json": {
        schema: z.object({
            msg: z.string().openapi({
                description: "Mensagem detalhada"
            })
        })
    }
}

export const queryErrorContent = {
    "application/json": {
        schema: z.object({
            msg: z.string().openapi({ description: "Mensagem detalhada" }),
            error: z.any().openapi({
                type: "object",
                description: "Resposta de erro do banco de dados"
            })
        })
    }
}

export const autenticationErrorContent = {
    "application/json": {
        schema: z.object({
            msg: z.string().openapi({ description: "Mensagem detalhada" }),
            error: z.any().optional().openapi({
                type: "object",
                description: "Explicação do erro"
            })
        })
    }
}