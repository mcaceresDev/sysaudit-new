export interface Service {
  id: number
  project_id: number
  name: string
 //description?: string
  base_path: string
  protocol_type: string
  auth_type: string
}

export interface UpdateServicePayload {
  id: number
  data: Partial<Service>
}

export interface ServiceFormData {
  name: string
  description?: string
  tecnologies?: string
}

export interface ServiceEndpoints {
  id: number
  name: string
  //description?: string
  endpoints: Array<any>
}