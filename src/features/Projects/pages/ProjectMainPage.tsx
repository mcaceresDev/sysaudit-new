import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { fetchProjects, createProject, updateProject } from '../projectSlice'
import { Table } from '../../../components/Table'
import { projectColumns } from '../helpers/projectColumns'
import ProjectModal from '../components/ProjectModal'
import type { Project, ProjectFormData } from '../project.types'


const ProjectMainPage = () => {

  const dispatch = useAppDispatch()
  const { items } = useAppSelector(
    state => state.projects
  )

  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openCreateModal = () => {
    setSelectedProject(null)
    setShowModal(true)
  }
  const handleEdit = (project: Project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  const handleSubmit = async (data: ProjectFormData) => {

    if (selectedProject) {
      await dispatch(
        updateProject({
          id: selectedProject.id,
          data
        })
      ).unwrap()

    } else {

      await dispatch(
        createProject(data)
      ).unwrap()

    }

    setShowModal(false)
  }

  const columns = useMemo(
    () =>
      projectColumns({
        onEdit: handleEdit
      }),
    []
  )

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  return (
    <div>
      <h2>Proyectos</h2>
      <hr />
      <div className='py-3'>
        <button className="btn btn-sm btn-success" onClick={openCreateModal}>Crear nuevo</button>
      </div>
      <Table data={items} columns={columns} />

      {/* <ProjectModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleCreate}
      /> */}

      <ProjectModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        defaultValues={selectedProject ?? undefined}
      />
    </div>
  )
}

export default ProjectMainPage