import { request } from "../../services/api/axiosClient"
import type { Service, ServiceEndpoints } from "./service.types"

export const fetchServicesRequest = async () => {
//   const response = await api.get('/projects')
  const response = await request<Service[]>({
    url: "/services"
  })
  return response
}

export const fetchServiceEnpointsRequest = async (id: number) => {
//   const response = await api.get('/projects')
  const response = await request<ServiceEndpoints>({
    url: `/services/endpoints/${id}`
  })
  return response
}

export const createServiceRequest = async (data: Partial<Service>) => {
  const response = await request<Service>({
    method: "post",
    url: "/services",
    data
  })
  return response
}

export const updateServiceRequest = async (id: number, data: any) => {
  const response = await request<Service>({
    method: "put",
    url: `/services/${id}`,
    data
  })
  return response
}