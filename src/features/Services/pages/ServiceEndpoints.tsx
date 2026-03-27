import { useEffect, useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchServiceEnpoints } from "../serviceSlice"
import { Box, Link, Rocket, Share2, Shield, Vault } from "lucide-react"
import EndpointParamsForm from "../components/EndpointParamsForm"

const ServiceEndpointsPage = () => {

    const dispatch = useAppDispatch()


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

            <div className="my-3 d-flex gap-3 justify-content-between">
                <div className="w-50 p-3 bg-white border rounded">
                    <div className="d-flex justify-content-between">
                        <h4 className="text-center">Parametros</h4>
                        <button className="btn btn-sm btn-outline-primary">Agregar</button>
                    </div>
                    <hr />
                    <p className="text-center">Acá se listan los parametros requeridos para esta petición</p>

                    <EndpointParamsForm />

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