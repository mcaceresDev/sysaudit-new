import { Info, SquarePen, UserPlus } from 'lucide-react'
import React from 'react'

const ProjectDetailsPage = () => {
    return (
        <div>
            <h2>Cloudflare</h2>
            <hr />
            <p>Proyecto para reportes estadisticos de trafico de Cloudflare</p>

            <h4>Stack</h4>
            <p>Java, Primefaces, Spring boot</p>

            <h4>Equipo</h4>
            <hr />
            <div className="rounded border px-4 py-3 my-3 d-flex justify-content-between">
                <div>
                    <h5 className="card-title">Manuel Cáceres Mercado</h5>
                    <span>Lider de proyecto</span>
                    <p className="card-text">mcaceres@internal.inss.org</p>

                    <h5>Colaboradores</h5>
                    <ul className='list-unstyled'>
                        <li>Josue Sanchez Gomez</li>
                        <li>Victor Caceres Juarez</li>
                        <li>Yader García Ramírez</li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-sm btn-outline-warning"><SquarePen size={18} /></button>
                    <button className="btn btn-sm btn-outline-primary mx-2"><UserPlus size={18}/></button>
                </div>
            </div>
            
            <h4>Servicios</h4>
            <hr />
            <div className="rounded border px-4 py-3 my-3 d-flex justify-content-between">
                <div>
                    <h6>Cloudflare WS</h6>
                    <p>Servicio provisional</p>
                    <ul className='list-unstyled'>
                        <li>Tipo: REST</li>
                        <li>Endpoints: 120</li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-sm btn-outline-primary mx-2"><SquarePen size={18} /></button>
                    <button className="btn btn-sm btn-outline-primary"><Info size={18} /></button> 
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailsPage