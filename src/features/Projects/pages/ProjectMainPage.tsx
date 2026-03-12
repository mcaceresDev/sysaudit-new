import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { fetchProjects, createProject } from '../projectSlice'
import { Table } from '../../../components/Table'
import { projectColumns } from '../helpers/projectColumns'
import ProjectModal from '../components/ProjectModal'


const ProjectMainPage = () => {

  const dispatch = useAppDispatch()
  const { items, loading } = useAppSelector(
    state => state.projects
  )

  const [globalFilter, setGlobalFilter] = useState('')

  const [showModal, setShowModal] = useState(false)

  const handleCreate = async (data:any) => {

    await dispatch(createProject(data)).unwrap()

    setShowModal(false)
  }

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  return (
    <div>
      <h2>Proyectos</h2>
      <hr />
      <div className='py-3'>
        <button className="btn btn-sm btn-success" onClick={() => setShowModal(true)}>Crear nuevo</button>
      </div>
      <Table data={items} columns={projectColumns} />

      <ProjectModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleCreate}
      />
    </div>
  )
}

export default ProjectMainPage