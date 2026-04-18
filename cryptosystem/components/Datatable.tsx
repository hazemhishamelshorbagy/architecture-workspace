import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/Table";
import { clsx } from "clsx";

import React from "react";

const Datatable = <T,>({
  columns,
  data,
  rowKey,
  tableClassName,
  headerRowClassName,
  headerCellClassName,
  bodyRowClassName,
  bodyCellClassName,
  headerClassName,
}: DataTableProps<T>) => {
  return (
    <Table className={clsx("custom-scrollbar", tableClassName)}>
      <TableHeader className={headerClassName}>
        <TableRow className={clsx("hover:bg-transparent!",headerRowClassName)}>
         {columns.map((column, index) => (
            <TableHead key={index} className={clsx("bg-dark-400 text-purple-100 py-4 first:pl-5 last:pr-5",headerCellClassName)}>
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowKey(row, rowIndex)} className={clsx("overflow-hidden rounded-lg border-b border-purble-100/5 hover:bg-dark-400/30 relative",bodyRowClassName)}>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex} className={clsx("py-4 first:ps-5 last:pe-5",bodyCellClassName)}>
                {column.cell(row, rowIndex)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Datatable;
