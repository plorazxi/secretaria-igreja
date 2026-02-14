import z from "zod";
import { registry } from "../lib/openApiGenerator.js";
import { autenticationErrorContent, queryErrorContent, sucessfullContent } from "./contents.js";
import { createUserSchema, deleteUserSchema, patchUserSchema } from "../interfaces/usersInterfaces.js";

// Rota para pegar todos os usuários
registry.registerPath({
    method: "get",
    path: "/users/{token}",
    description: "Pega todos os usuários do banco de dados",
    request: {
        params: z.object({
            "token": z.jwt()
        })
    },
    responses: {
        200: {
            description: "Lista dos usuários no banco de dados",
            content: {
                "application/json": {
                    schema: z.any().openapi({
                        type: "object",
                        description: "Retorno do banco de dados"
                    })
                }
            }
        },
        400: {
            description: "Erro na query ao banco de dados",
            content: queryErrorContent
        },
        401: {
            description: "Erro de autenticação",
            content: autenticationErrorContent
        }
    }
});

// Rota para cadastrar usuarios
registry.registerPath({
    method: "post",
    path: "/users/create",
    description: "Rota para adicionar usuário ao banco de dados",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: createUserSchema
                }
            }
        }
    },
    responses: {
        200: {
            description: "Sucesso ao cadastrar usuário",
            content: sucessfullContent
        },
        400: {
            description: "Erro na query ao banco de dados",
            content: queryErrorContent
        },
        401: {
            description: "Erro de autenticação",
            content: autenticationErrorContent
        }
    }
});

// Rota para modificar usuarios
registry.registerPath({
    method: "patch",
    path: "/users/patch",
    description: "Rota para modificar usuário no banco de dados",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: patchUserSchema
                }
            }
        }
    },
    responses: {
        200: {
            description: "Sucesso na alteração do usuário",
            content: sucessfullContent
        },
        400: {
            description: "Erro na query ao banco de dados",
            content: queryErrorContent
        },
        401: {
            description: "Erro de autenticação",
            content: autenticationErrorContent
        }
    }
});

// Rota para deletar usuarios
registry.registerPath({
    method: "delete",
    path: "/users/delete",
    description: "Rota para deletar usuário ao banco de dados",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: deleteUserSchema
                }
            }
        }
    },
    responses: {
        200: {
            description: "Sucesso ao deletar usuário",
            content: sucessfullContent
        },
        400: {
            description: "Erro na query ao banco de dados",
            content: queryErrorContent
        },
        401: {
            description: "Erro de autenticação",
            content: autenticationErrorContent
        }
    }
});