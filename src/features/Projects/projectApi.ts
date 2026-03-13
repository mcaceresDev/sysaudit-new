import { request } from "../../services/api/axiosClient"
import type { Project } from "./project.types"

export const fetchProjectsRequest = async () => {
//   const response = await api.get('/projects')
  const response = await request<Project[]>({
    url: "/projects"
  })
  return response
}

export const createProjectRequest = async (data: Partial<Project>) => {
  const response = await request<Project>({
    method: "post",
    url: "/projects",
    data
  })
  return response
}

export const updateProjectRequest = async (id: number, data: any) => {
  const response = await request<Project>({
    method: "put",
    url: `/projects/${id}`,
    data
  })
  return response
}