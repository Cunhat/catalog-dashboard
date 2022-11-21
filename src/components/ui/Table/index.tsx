import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

export const Table: React.FC<{ columns: any; defaultData: any }> = ({ columns, defaultData }) => {
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='p-2 w-full '>
      <table className='w-full border-b-2 border-neutral-300'>
        <thead className='bg-slate-100 dark:bg-dark-background border-b-2 border-neutral-300'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className='py-4 px-3 text-start' key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {defaultData.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className='p-3 text-start dark:text-white' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td className='p-3 text-start text-neutral-500 dark:text-white'>No available options</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
