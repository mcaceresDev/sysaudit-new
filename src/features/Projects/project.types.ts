export interface Project {
  id: number
  name: string
  description?: string
}

export interface ServiceAssoc {
    id: number
    project_id?: number
    name: string
    base_path: string
    protocol_type?:  string
    auth_type?: string
}

export interface ProjectDetails {
  id: number
  name: string
  description?: string
  services: Array<ServiceAssoc>
}