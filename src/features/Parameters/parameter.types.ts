export interface Parameter {
    id: number
    endpoint_id: number
    name: string
    in: 'path' | 'query' | 'header' | 'body'
    type: string
    required: boolean
}

export interface UpdateParameterPayload {
    id: number
    data: Partial<Parameter>
}
