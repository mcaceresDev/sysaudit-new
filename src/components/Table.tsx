import { useState } from 'react'
import { flexRender, getCoreRowModel, useReactTable, getFilteredRowModel, getPaginationRowModel } from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'

type Props<T> = {
    data: T[]
    columns: ColumnDef<T>[]
}

export function Table<T>({ data, columns }: Props<T>) {

    const [globalFilter, setGlobalFilter] = useState("")

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter
        },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })
    return (
        <div className='table-responsive'>
            <div className='py-3'>
                <input type="text" className='form-control form-control-sm' placeholder='Buscar' value={globalFilter ?? ""} onChange={e => setGlobalFilter(e.target.value)} />
            </div>
            <table className='table table-bordered table-striped'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className='text-center'>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.length === 0 ?
                    (
                        <tr>
                            <td colSpan={columns.length} className='text-center'>
                                No hay registros
                            </td>
                        </tr>
                    )
                    :(
                        table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {
                                            flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )
                                        }
    
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <button className='btn btn-sm btn-outline-primary' onClick={()=> table.previousPage()} disabled={!table.getCanPreviousPage}>Anterior</button>
                <span>Página {table.getState().pagination.pageIndex + 1} de {" "} {table.getPageCount()}</span>
                <button className='btn btn-sm btn-outline-primary' onClick={()=> table.nextPage()} disabled={!table.getCanNextPage}>Siguiente</button>
            </div>
        </div>
    )
}

// export default Table