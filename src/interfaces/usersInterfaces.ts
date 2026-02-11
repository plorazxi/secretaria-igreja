import z from "zod";

export const createUserSchema = z.object({
    nome: z.string(),
    email: z.email(),
    cpf: z.string().length(11),
    rg: z.string().optional(),
    celular: z.string().length(11),
    data_nascimento: z.coerce.date(),
    endereco: z.string(),
    data_entrada: z.coerce.date(),
    note: z.string().optional(),
    token: z.jwt({ alg: "HS256" })
});

export type createUser = z.infer<typeof createUserSchema>;

export const deleteUserSchema = z.object({
    id: z.int(),
    token: z.jwt({ alg: "HS256" })
});