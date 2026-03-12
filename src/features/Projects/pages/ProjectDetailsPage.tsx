import { Box, Cloudy, Info, Link, SquarePen, UserPlus, User, Users } from 'lucide-react'
import "../styles/details.css"

const ProjectDetailsPage = () => {
    return (
        <div className='details-container rounded bg-light border'>

            <div className='header py-3 px-3 bg-white border-bottom'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2>Cloudflare</h2>
                    <button className="btn btn-sm btn-outline-primary">Editar proyecto</button>
                </div>
                <hr />
                <p>Proyecto para reportes estadisticos de trafico de Cloudflare</p>
                <p> <span className='fw-bold'>Tecnologías:</span> Java, Primefaces, Spring boot</p>
            </div>

            <div className='m-3 p-3 d-flex justify-content-between gap-3 bg-white border rounded'>
                <div><span className='text-primary'><Cloudy /></span> 3 Servicios</div>
                <div><span className='text-primary'><Link /></span> 15 Endpoints</div>
                <div><span className='text-primary'><Users /></span> 4 Miembros</div>
            </div>

            <div className='m-3 p-3 border rounded bg-white'>
                <div className='d-flex justify-content-between'>
                    <h4 className="text-primary">Equipo</h4>
                    <div>
                        <button className="btn btn-sm btn-outline-primary mx-2">Administrar</button>
                        <button className="btn btn-sm btn-outline-primary"><UserPlus size={16} /> Invitar Miembro</button>
                    </div>
                </div>
                <hr />

                <h5>CF Team</h5>
                <div className='d-flex gap-4 align-items-center'>
                    <div className='d-flex gap-2 my-3'>
                        <div className='border rounded-circle p-3 bg-primary-subtle'>
                            <User size={40} />
                        </div>
                        <div>
                            <span className='d-block fw-bold'>Manuel Cáceres M.</span>
                            <span>Lider de proyecto</span> <br />
                            <span>mcaceres@internal.inss.org</span>
                        </div>
                    </div>
                </div>
                <hr />

                <h5>Colaboradores</h5>
                <hr />
                <ul className='list-unstyled'>
                    <li><User /> Josue Sanchez Gomez</li>
                    <li><User /> Victor Caceres Juarez</li>
                    <li><User /> Yader García Ramírez</li>
                </ul>
            </div>

            <div className='m-3 p-3 border rounded bg-white'>
                <div className='d-flex justify-content-between'>
                    <h4 className="text-primary">Servicios</h4>
                </div>
                <hr />

                <div className='my-3 alert border'>
                    <div className='d-flex justify-content-between'>
                        <h5>Cloudflare WS</h5>
                        <button className="btn btn-sm btn-outline-primary mx-2">Administrar</button>
                    </div>
                    <hr />
                    <p><Link size={16} /> 15 endpoints</p>
                    <p><Box /> REST</p>
                </div>
                
                <div className='my-3 alert border'>
                    <div className='d-flex justify-content-between'>
                        <h5>Servicios Cloudflare WS</h5>
                        <button className="btn btn-sm btn-outline-primary mx-2">Administrar</button>
                    </div>
                    <hr />
                    <p><Link size={16} /> 15 endpoints</p>
                    <p><Box /> REST</p>
                </div>

            </div>

        </div>
    )
}

export default ProjectDetailsPage