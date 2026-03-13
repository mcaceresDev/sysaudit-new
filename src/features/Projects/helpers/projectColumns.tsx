// Codigo para definir las columnas de tanstack
import type { ColumnDef } from "@tanstack/react-table";
import type { Project } from "../project.types";
import { Info, SquarePen, Trash } from "lucide-react";

interface Props {
    onEdit: (project: Project) => void
    onDelete?: (project: Project) => void
}

export const projectColumns = ({ onEdit, onDelete }: Props): ColumnDef<Project>[] => [
    {
        accessorKey: "name",
        header: "Nombre"
    },
    {
        accessorKey: "description",
        header: "Descripción"
    },
    // {
    //     id: "actions",
    //     header: "Acciones",
    //     cell: ({ row }) => {
    //         const project = row.original

    //         return (
    //             <div className="d-flex gap-2 justify-content-center" >
    //                 <button
    //                     className="btn btn-sm btn-outline-warning"
    //                     onClick={() => console.log("Editar", project.id)}
    //                 >
    //                     <SquarePen size={16} />
    //                 </button>

    //                 < button
    //                     className="btn btn-sm btn-outline-danger"
    //                     onClick={() => console.log("Eliminar", project.id)}
    //                 >
    //                     <Trash size={16} />
    //                 </button>
    //                 < a
    //                     className="btn btn-sm btn-outline-primary" href="/projects/1"
    //                 // onClick={() => console.log("Eliminar", project.id)}
    //                 >
    //                     <Info size={16} />
    //                 </a>
    //             </div>
    //         )
    //     }
    // }
    {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {
            const project = row.original

            return (
                <div className="d-flex gap-2 justify-content-center">

                    <button
                        className="btn btn-sm btn-outline-warning"
                        onClick={() => onEdit(project)}
                    >
                        <SquarePen size={16} />
                    </button>

                    <button
                        className="btn btn-sm btn-outline-danger"
                        // onClick={() => onDelete(project)}
                    >
                        <Trash size={16} />
                    </button>

                    <a
                        className="btn btn-sm btn-outline-primary"
                        href={`/projects/${project.id}`}
                    >
                        <Info size={16} />
                    </a>

                </div>
            )
        }
    }
]