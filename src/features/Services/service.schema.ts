import { z } from 'zod'

export const serviceSchema = z.object({
  project_id: z.number(),
  name: z.string().min(3, 'El nombre es obligatorio y debe tener una longitud válida'),
  base_path: z.string().min(3, 'El nombre es obligatorio y debe tener una longitud válida'),
  protocol_type: z.string().min(3, 'El nombre es obligatorio y debe tener una longitud válida'),
  auth_type: z.string().min(3, 'El nombre es obligatorio y debe tener una longitud válida'),
})

export type ProjectFormData = z.infer<typeof serviceSchema>
