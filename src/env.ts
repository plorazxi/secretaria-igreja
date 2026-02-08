import { z } from "zod";
import 'dotenv/config';

// Tipando as variaveis de ambiente
const envSchema = z.object({
    SERVER_PORT: z.string()
});

// Exportando as variaveis de ambiente
export const env = envSchema.parse(process.env);