import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { fetchProjects } from '../projectSlice'
import { Table } from '../../../components/Table'
import { projectColumns } from '../helpers/projectColumns'


const ProjectMainPage = () => {

  const dispatch = useAppDispatch()
  const { items, loading } = useAppSelector(
    state => state.projects
  )
  
  const [globalFilter, setGlobalFilter] = useState('')
  
  useEffect(()=> {
    dispatch(fetchProjects())
  }, [dispatch])

  return (
    <div>
        <h2>Proyectos</h2>
        <hr />
        <div className='py-3'>
          <button className="btn btn-sm btn-success">Crear nuevo</button>
        </div>
        <Table data={items} columns={projectColumns}/>
    </div>
  )
}

export default ProjectMainPage