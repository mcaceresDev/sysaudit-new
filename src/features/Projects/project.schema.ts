import { z } from 'zod'

export const projectSchema = z.object({
  name: z.string().min(3, 'El nombre es obligatorio y debe tener una longitud válida'),
  description: z.string().optional()
})

export type ProjectFormData = z.infer<typeof projectSchema>
