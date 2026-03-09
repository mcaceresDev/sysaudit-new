import React from 'react'
import "./styles/sidebar.css"

const Sidebar = () => {
  return (
    <aside className='main-sidebar px-2 py-3 border-end border-dark'>
      <span>GESTION</span>
      <hr />
      <p>Usuarios</p>
      <p>Equipos</p>
      <p>Roles</p>

      <span>PROYECTOS</span>
      <hr />
      <p>Servicios</p>
      <p>Estadísticas</p>
    </aside>
  )
}

export default Sidebar