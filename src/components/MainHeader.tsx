import React, { useState } from 'react'
import { Bell, ChevronDown } from 'lucide-react'
import "./styles/header.css"

const MainHeader = () => {

    const [open, setOpen] = useState(false)
    const [openNotif, setOpenNotif] = useState(false)

    return (
        <header className="app-header">

            <div className="app-title">
                SYSAUDIT
            </div>

            <div className="header-actions">

                {/* NOTIFICACIONES */}
                <div className="dropdown">

                    <button
                        className="icon-button"
                        data-bs-toggle="dropdown"
                        onClick={() => {setOpen(false); setOpenNotif(!openNotif)}}
                    >
                        <Bell size={20} />
                        <span className="badge">3</span>

                    </button>

                    {openNotif && (
                        <ul className="dropdown-menu-custom notification-menu list-group list-group-flush px-2 py-3">

                            <span className="dropdown-header text-center">
                                NOTIFICACIONES
                            </span>
                            <hr className='my-2' />
                            <li className='list-group-item dropdown-item'>
                                Nuevo usuario registrado
                            </li>

                            <li className='list-group-item dropdown-item'>
                                Proyecto actualizado
                            </li>

                            <li className='list-group-item dropdown-item'>
                                Reporte generado
                            </li>
                            
                            <li className='list-group-item dropdown-item'>
                                Xochilt Cordova te ha agregado al equipo Karplus
                            </li>

                        </ul>
                    )}

                </div>


                {/* USUARIO */}
                <div className="user-menu">

                    <button
                        className="user-button"
                        onClick={() => {setOpenNotif(false); setOpen(!open)}}
                    >
                        Admin
                        <ChevronDown size={18} />
                    </button>

                    {open && (

                        <div className="dropdown-menu-custom px-2 py-3">

                            <button className="dropdown-item">
                                Perfil
                            </button>

                            <button className="dropdown-item">
                                Configuración
                            </button>

                            <hr />

                            <button className="dropdown-item text-danger">
                                Cerrar sesión
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </header>
    )
}

export default MainHeader

{/* <button type="button" className="btn position-relative">
    <Bell color='#000000' size={16}/>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        99+
        <span className="visually-hidden">unread messages</span>
    </span>
</button> */}