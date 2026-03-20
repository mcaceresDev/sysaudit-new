import { ArrowUpRight, Box, Container, Database, DatabaseZap, Link, Server, Shield } from 'lucide-react'
import React from 'react'

const ServicePage = () => {
  return (
    <div className='border rounded p-4 bg-light'>
      <div className="rounded bg-white p-3 my-3 border">
        <div className='d-flex justify-content-between align-items-center'>
          <h2>Cloudflare Service</h2>
          <button className="btn btn-sm btn-outline-primary">Editar</button>
        </div>
        <hr />
        <p>Esta es una pequeña descripción del proyecto</p>
      </div>

      <div className=' p-3 d-flex justify-content-between gap-3 bg-white border rounded'>
        <div><span className='text-primary'><Link /> Ruta base:</span> /api/ws</div>
        <div><span className='text-primary'><Box /> Tipo de servicio:</span> REST</div>
        <div><span className='text-primary'><Shield />Autenticación: </span> Basic</div>
      </div>

      <div className='my-3 p-3 border rounded bg-white'>
        <div className='d-flex justify-content-between align-items-center'>
          <h4>Infraestructura</h4>
          <button className="btn btn-sm btn-outline-primary">Agregar nuevo ambiente</button>
        </div>
        <hr />
        <h5>Ambientes 2</h5>
        <hr />
        <div className='row g-5'>
          <div className="col-4">
            <p><span className='text-primary fw-bold'><Container /> Ambiente:</span> Desarrollo</p>
            <p><span className='text-primary fw-bold'><Link /> Ruta base:</span> http://localhost:3000</p>
            <p><span className='text-primary fw-bold'><Database /> Motor BD:</span> PostgreSQL</p>
            <p><span className='text-primary fw-bold'><DatabaseZap /> Host BD: </span>CFDesa</p>
            <p><span className='text-primary fw-bold'><Server /> Servidor:</span> Cloudflare</p>
            <hr />
            <div className='d-flex'>
              <button className="btn btn-sm btn-outline-primary">Editar</button>
            </div>
          </div>
          <div className="col-4">
            <p><span className='text-primary fw-bold'><Container /> Ambiente:</span> Producción</p>
            <p><span className='text-primary fw-bold'><Link /> Ruta base:</span> http://localhost:3000</p>
            <p><span className='text-primary fw-bold'><Database /> Motor BD:</span> PostgreSQL</p>
            <p><span className='text-primary fw-bold'><DatabaseZap /> Host BD: </span>CFProd</p>
            <p><span className='text-primary fw-bold'><Server /> Servidor:</span> Cloudflare</p>
            <hr />
            <div className='d-flex'>
              <button className="btn btn-sm btn-outline-primary">Editar</button>
            </div>
          </div>
          <div className="col-4">
            <p><span className='text-primary fw-bold'><Container /> Ambiente:</span> QA</p>
            <p><span className='text-primary fw-bold'><Link /> Ruta base:</span> http://localhost:3000</p>
            <p><span className='text-primary fw-bold'><Database /> Motor BD:</span> PostgreSQL</p>
            <p><span className='text-primary fw-bold'><DatabaseZap /> Host BD: </span>CFProd</p>
            <p><span className='text-primary fw-bold'><Server /> Servidor:</span> Cloudflare</p>
            <hr />
            <div className='d-flex'>
              <button className="btn btn-sm btn-outline-primary">Editar</button>
            </div>
          </div>
          
        </div>
      </div>

      <div className='my-3 p-3 border rounded bg-white'>
        <div className='d-flex justify-content-between align-items-center'>
          <h4>Endpoints</h4>
          <button className="btn btn-sm btn-outline-primary">Agregar nuevo</button>
        </div>
        <hr />
        <div className="p-2 my-3 rounded border d-flex justify-content-between align-items-center">
          <div className='d-flex'>
            <div className='border-end me-3' style={{ width: "80px" }}>
              <span className='text-primary'>POST</span>
            </div>
            <span>/analitycs/</span>
          </div>
          <button className="btn btn-sm btn-outline-primary"><ArrowUpRight size={16} /></button>
        </div>
        <div className="p-2 my-3 rounded border d-flex justify-content-between align-items-center">
          <div className='d-flex'>
            <div className='border-end me-3' style={{ width: "80px" }}>
              <span className='text-success'>GET</span>
            </div>
            <span>/analitycs/</span>
          </div>
          <button className="btn btn-sm btn-outline-primary"><ArrowUpRight size={16} /></button>
        </div>
        <div className="p-2 my-3 rounded border d-flex justify-content-between align-items-center">
          <div className='d-flex'>
            <div className='border-end me-3' style={{ width: "80px" }}>
              <span className='text-warning'>PUT</span>
            </div>
            <span>/analitycs/</span>
          </div>
          <button className="btn btn-sm btn-outline-primary"><ArrowUpRight size={16} /></button>
        </div>
        <div className="p-2 my-3 rounded border d-flex justify-content-between align-items-center">
          <div className='d-flex'>
            <div className='border-end me-3' style={{ width: "80px" }}>
              <span className='text-danger'>DELETE</span>
            </div>
            <span>/analitycs/</span>
          </div>
          <button className="btn btn-sm btn-outline-primary"><ArrowUpRight size={16} /></button>
        </div>
      </div>

    </div>
  )
}

export default ServicePage