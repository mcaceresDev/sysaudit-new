import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { projectSchema } from "../project.schema"
import type { Project, ProjectFormData } from "../project.types"
import "../styles/modal.css"
import { useEffect, useState } from "react"

interface Props {
  show: boolean
  onClose: () => void
  onSubmit: (data: ProjectFormData) => Promise<void>
  defaultValues?: Project
}

export default function ProjectModal({
  show,
  onClose,
  onSubmit,
  defaultValues
}: Props) {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setTimeout(() => setVisible(true), 10)
    } else {
      setVisible(false)
    }
  }, [show])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    // defaultValues
  })

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues)
    } else {
      reset({
        name: "",
        description: "",
        tecnologies: ""
      })
    }
  }, [defaultValues, reset])

  if (!show) return null

  return (
    <>
      <div className="modal fade show d-block">

        <div className="modal-dialog modal-dialog-centered">

          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">
                {defaultValues ? "Editar Proyecto" : "Crear Proyecto"}
              </h5>

              <button
                className="btn-close"
                onClick={onClose}
              />
            </div>

            {/* Body */}
            <div className="modal-body">

              <form id="projectForm" onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                  <label className="form-label">
                    Nombre
                  </label>

                  <input className="form-control form-control-sm " {...register("name")} />
                  {errors.name && (
                    <small className="text-danger">
                      {errors.name.message}
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Tecnologías usadas
                  </label>

                  <input className="form-control form-control-sm " placeholder="Ej: Java, Spring boot" {...register("tecnologies")}/>
                  {errors.tecnologies && (
                    <small className="text-danger">
                      {errors.tecnologies.message}
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Descripcion
                  </label>

                  <textarea className="form-control form-control-sm " rows={4} {...register("description")}/>
                  {errors.description && (
                    <small className="text-danger">
                      {errors.description.message}
                    </small>
                  )}
                </div>

              </form>

            </div>

            {/* Footer */}
            <div className="modal-footer d-flex">

              <button
                className="btn btn-sm btn-outline-success mx-auto"
                type="submit"
                form="projectForm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>

            </div>

          </div>
        </div>
      </div>

      <div className={`modal-backdrop fade ${visible ? "show" : ""}`}> </div>
    </>
  )
}