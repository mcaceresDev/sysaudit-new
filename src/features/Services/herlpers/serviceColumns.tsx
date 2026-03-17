// Codigo para definir las columnas de tanstack
import type { ColumnDef } from "@tanstack/react-table";
import type { Service } from "../service.types";
import { Info, SquarePen, Trash } from "lucide-react";

interface Props {
    onEdit: (service: Service) => void
    onDelete?: (service: Service) => void
}

export const serviceColumns = ({ onEdit, onDelete }: Props): ColumnDef<Service>[] => [
    {
        accessorKey: "name",
        header: "Nombre"
    },
    // {
    //     accessorKey: "description",
    //     header: "Descripción"
    // },
    {
        accessorKey: "protocol_type",
        header: "Tipo"
    },
    {
        accessorKey: "base_path",
        header: "Ruta base"
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {
            const service = row.original

            return (
                <div className="d-flex gap-2 justify-content-center">

                    <button
                        className="btn btn-sm btn-outline-warning"
                        onClick={() => onEdit(service)}
                    >
                        <SquarePen size={16} />
                    </button>

                    <button
                        className="btn btn-sm btn-outline-danger"
                        // onClick={() => onDelete(service)}
                    >
                        <Trash size={16} />
                    </button>

                    <a
                        className="btn btn-sm btn-outline-primary"
                        href={`/services/${service.id}`}
                    >
                        <Info size={16} />
                    </a>

                </div>
            )
        }
    }
]