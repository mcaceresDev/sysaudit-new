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
  name: z.string().optional(),
  required: z.boolean().optional(),
  description: z.string().optional(),
  type: z.enum(["string", "number", "boolean"]),
  in: z.enum(["query", "path", "header", "body"])
})

export const paramsFormSchema = z.object({
  params: z.array(paramSchema)
})


//PARA FORMULARIO DINAMICO CORREGIDO
export const endpointParamSchema = z.object({
  name: z.string().optional(),

  in: z.enum(["query", "path", "header", "body"]),

  type: z.enum(["string", "number", "boolean"]),

  required: z.boolean().default(false).optional(),

  description: z.string().optional()
})
.superRefine((data, ctx) => {

  const hasOtherValues =
    data.type !== "string" ||   // cambió algo
    data.in !== "query" ||
    data.required === true ||
    (data.description && data.description.trim() !== "")

  // si hay datos PERO no hay name → error
  if (hasOtherValues && (!data.name || data.name.trim() === "")) {
    ctx.addIssue({
      code: "custom",
      path: ["name"],
      message: "Debes especificar el nombre"
    })
  }
})

export const endpointParamsFormSchema = z.object({
  params: z.array(endpointParamSchema)
})

export type EndpointParamsFormData = z.infer<typeof endpointParamsFormSchema>
export type ParamsFormData = z.infer<typeof paramsFormSchema>