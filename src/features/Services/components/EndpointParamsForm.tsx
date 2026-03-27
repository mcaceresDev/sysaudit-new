import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { endpointParamsFormSchema } from "../service.schema"
import type { EndpointParamsFormData } from "../service.schema"

export default function EndpointParamsForm() {

    const { control, register, handleSubmit, watch, formState: { errors } } = useForm<EndpointParamsFormData>({
        resolver: zodResolver(endpointParamsFormSchema),
        defaultValues: {
            params: [
                {
                    name: "",
                    in: "query",
                    type: "string",
                    required: false,
                    description: ""
                }
            ]
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "params"
    })

    const params = watch("params")

    //Para filas vacias
    // const cleanParams = (data: EndpointParamsFormData) => {
    //     return data.params.filter(p => p.name && p.name.trim() !== "")
    // }
    const cleanAndValidate = (data: EndpointParamsFormData) => {
        return data.params
            .filter(p => p.name && p.name.trim() !== "")
            .map(p => ({
                ...p,
                name: p.name!.trim()
            }))
    }

    // 🔥 Auto append estilo Postman
    const handleAutoAppend = (index: number) => {
        const current = params[index]

        if (
            index === fields.length - 1 &&
            current.name &&
            current.name.trim() !== ""
        ) {
            append({
                name: "",
                in: "query",
                type: "string",
                required: false,
                description: ""
            })
        }
    }

    const onSubmit = (data: EndpointParamsFormData) => {
        const cleanData = cleanAndValidate(data)
        console.log(cleanData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                {fields.map((field, index) => (
                    <div className="d-flex"
                        key={field.id}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "150px 120px 120px 80px 1fr 40px",
                            gap: "10px",
                            marginBottom: 10
                        }}
                    >

                        <div className="d-flex flex-column">

                            {/* NAME */}
                            <input className="form-control form-control-sm my-2"
                                placeholder="name"
                                {...register(`params.${index}.name`)}
                                onBlur={() => handleAutoAppend(index)}
                            />
                            {errors.params?.[index]?.name && (
                                <small className="text-danger">
                                    {errors.params[index]?.name?.message}
                                </small>
                            )}

                            {/* IN */}
                            <select className="form-select form-control-sm my-2" {...register(`params.${index}.in`)}>
                                <option value="query">query</option>
                                <option value="path">path</option>
                                <option value="header">header</option>
                                <option value="body">body</option>
                            </select>

                            {/* TYPE */}
                            <select className="form-select form-control-sm my-2" {...register(`params.${index}.type`)}>
                                <option value="string">string</option>
                                <option value="number">number</option>
                                <option value="boolean">boolean</option>
                            </select>

                            {/* REQUIRED */}
                            <div className="form-check">
                                <input className="form-check-input my-2"
                                    type="checkbox"
                                    {...register(`params.${index}.required`)}
                                />
                                <label className="form-check-label">
                                    Es obligatorio
                                </label>
                            </div>

                            {/* DESCRIPTION */}
                            <input className="form-control form-control-sm my-2"
                                placeholder="description"
                                {...register(`params.${index}.description`)}
                            />
                        </div>


                        {/* DELETE */}
                        <button className="btn-close" type="button" onClick={() => remove(index)}></button>

                    </div>
                ))}

                <button className="btn btn-sm btn-outline-success" type="submit">Guardar</button>

            </form>
            
        </>
    )
}