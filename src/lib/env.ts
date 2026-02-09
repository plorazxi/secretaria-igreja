import { z } from "zod";
import 'dotenv/config';

// Tipando as variaveis de ambiente
const envSchema = z.object({
    SERVER_PORT: z.string(),
    SERVER_SECRETKEY: z.string(),
    DATABASE_URL: z.string(),
    ADMIN_LOGIN: z.string(),
    ADMIN_PASSWORD_HASH: z.string()
});

// Exportando as variaveis de ambiente
export const env = envSchema.parse(process.env);