import { z } from "zod";

export const parameterSchema = z.object({
    endpoint_id: z.number(),
    name: z.string().min(1, "El nombre es obligatorio y debe tener una logitud válida"),
    in: z.enum(['path', 'query', 'header', 'body']),
    type: z.string(),
    description: z.string().optional()
})