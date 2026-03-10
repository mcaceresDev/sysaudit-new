// Codigo para definir las columnas de tanstack
import type { ColumnDef } from "@tanstack/react-table";
import type { Project } from "../project.types";

export const projectColumns: ColumnDef<Project>[] = [
    {
        accessorKey: "name",
        header: "Nombre"
    },
    {
        accessorKey: "description",
        header: "Descripción"
    },
]