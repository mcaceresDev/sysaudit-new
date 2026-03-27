import { request } from "../../services/api/axiosClient";
import type { Parameter } from "./parameter.types";

// Todos los parametros del endpoint
export const fetchParametersRequest = async (endpointId:number) => {
    const response = await request<Parameter[]>({
        url: `/parameters/${endpointId}`
    })
    return response
}

export const createParameterRequest = async (data: Partial<Parameter>)=> {
    const response = await request<Parameter>({
        method: 'post',
        url: "/parameters",
        data
    })
    return response
}