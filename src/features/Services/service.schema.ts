import { z } from 'zod'

export const serviceSchema = z.object({
  project_id: z.number(),
  name: z.string().min(3, 'El nombre es obligatorio y debe tener una longitud válida'),
  base_path: z.string().min(3, 'El nombre es obligatorio y debe tener una longitud válida'),
  protocol_type: z.string().min(3, 'El nombre es obligatorio y debe tener una longitud válida'),
  auth_type: z.string().min(3, 'El nombre es obligatorio y debe tener una longitud válida'),
})

export type ProjectFormData = z.infer<typeof serviceSchema>


//PARA FORMULARIO DINAMICO
export const paramSchema = z.object({
  name: z.string().min(1, "Key requerida"),
  required: z.boolean().optional(),
  description: z.string().optional(),
  type: z.enum(["string", "number", "boolean"]),
  in: z.enum(["query", "path", "header", "body"])
})

export const paramsFormSchema = z.object({
  params: z.array(paramSchema)
})

export type ParamsFormData = z.infer<typeof paramsFormSchema>