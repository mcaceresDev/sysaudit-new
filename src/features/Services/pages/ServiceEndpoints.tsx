import { useEffect, useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchServiceEnpoints } from "../serviceSlice"
import { Table } from "../../../components/Table"
import { serviceColumns } from "../herlpers/serviceColumns"
import type { Service, ServiceEndpoints } from "../service.types"
import { Box, Link, Rocket, Share2, Shield, Vault } from "lucide-react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { ParamsFormData } from "../service.schema"
import { paramsFormSchema } from "../service.schema"

const ServiceEndpointsPage = () => {

    const dispatch = useAppDispatch()
    // const { items, selectedService } = useAppSelector(
    //     state => state.services
    // )

    // const columns = useMemo(
    //     () =>
    //         serviceColumns({
    //             onEdit: handleEdit
    //         }),
    //     []
    // )

    const { control, register, handleSubmit, watch } = useForm<ParamsFormData>({
        resolver: zodResolver(paramsFormSchema),
        defaultValues: {
            params: [{ name: "", required: false, type: "string", description: "", in: "query" }]
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "params"
    })

    const params = watch("params")

    const handleAutoAppend = (index: number) => {
        const current = params[index]

        if (
            index === fields.length - 1 &&
            current.name !== ""
        ) {
            append({ name: "", required: false, description: "", type: "string", in: "query" })
        }
    }

    const transformData = (data: ParamsFormData) => {
        return data.params.reduce((acc, param) => {
            // let value: any = param.value

            // if (param.type === "number") {
            //     value = Number(value)
            // }

            // if (param.type === "boolean") {
            //     value = value === "true"
            // }

            // acc[param.key] = value
            return acc
        }, {} as Record<string, any>)
    }

    const onSubmit = (data: ParamsFormData) => {
        // const formatted = transformData(data)
        // console.log(formatted)
        console.log(data)
    }


    useEffect(() => {
        dispatch(fetchServiceEnpoints(1))
    }, [dispatch])

    return (
        <div className='border rounded p-4 bg-light'>
            <div className="rounded bg-white p-3 my-3 border">
                <div className='d-flex justify-content-between align-items-center'>
                    <h2>Detalle Endpoint</h2>
                    <div>
                        <button className="mx-2 btn btn-sm btn-outline-primary">Editar</button>
                        <button className="btn btn-sm btn-outline-primary"><Rocket /></button>
                    </div>
                </div>
                <hr />
                <p>Esta es una pequeña descripción del endpoint</p>
            </div>

            <div className='my-3 p-3 d-flex justify-content-between gap-3 bg-white border rounded'>
                <div><span className='text-primary'><Box /> Tipo de servicio:</span> REST</div>
                <div><span className='text-primary'><Link /> Ruta base:</span> /api/ws</div>
                <div><span className='text-primary'><Share2 /> Método:</span> GET</div>
                <div><span className='text-primary'><Shield />Autenticación: </span> Basic</div>
            </div>

            {/* <div className="border rounded p-4 bg-white">

                <h4>Endpoints</h4>
                {
                    selectedService?.endpoints.map((item) =>
                        <div className="d-flex"><div className="" style={{ width: "50px" }}>{item.method}</div> <span>{item.path}</span></div>
                    )
                }
            </div> */}

            <div className="my-3 d-flex gap-3 justify-content-between flex-column">
                <div className="w-100 p-3 bg-white border rounded">
                    <div className="d-flex justify-content-between">
                        <h4 className="text-center">Parametros</h4>
                        <button className="btn btn-sm btn-outline-primary">Agregar</button>
                    </div>
                    <hr />
                    <p className="text-center">Define parametros requeridos para esta petición</p>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        {fields.map((field, index) => (
                            <div key={field.id} style={{ display: "flex", gap: "10px", marginBottom: 10 }}>

                                {/* TYPE */}
                                <select {...register(`params.${index}.type`)} className="form-select form-select-sm">
                                    <option value="string">string</option>
                                    <option value="number">number</option>
                                    <option value="boolean">boolean</option>
                                </select>

                                {/* NOMBRE */}
                                <input className="form-control-sm"
                                    placeholder="Key"
                                    {...register(`params.${index}.name`)}
                                    onBlur={() => handleAutoAppend(index)}
                                />

                                {/* IN */}
                                <select {...register(`params.${index}.in`)} className="form-select form-select-sm">
                                    <option value="query">query</option>
                                    <option value="path">path</option>
                                    <option value="header">header</option>
                                    <option value="body">body</option>
                                </select>

                                {/* DESCRIPTION */}
                                <input className="form-control-sm"
                                    placeholder="Description"
                                    {...register(`params.${index}.description`)}
                                />
                                
                                {/* REQUIRED */}
                                <input className="form-control-sm"
                                    placeholder="Es obligatorio"
                                    {...register(`params.${index}.required`)}
                                />

                                {/* DELETE */}
                                <button type="button" className="btn-close" onClick={() => remove(index)}>

                                </button>

                            </div>
                        ))}

                        <button type="submit" className="btn btn-sm btn-outline-success">Enviar</button>

                    </form>
                </div>


                <div className="w-50 p-3 bg-white border rounded">
                    <div className="d-flex justify-content-between">
                        <h4 className="text-center">Respuesta</h4>
                        <button className="btn btn-sm btn-outline-primary">Agregar</button>
                    </div>
                    <hr />
                    <p className="text-center">Define una respuesta esperada para este endpoint</p>
                </div>
            </div>


        </div>
    )
}

export default ServiceEndpointsPage