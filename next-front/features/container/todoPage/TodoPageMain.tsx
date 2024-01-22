'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import DropDown from '@/features/_components/DropDown';
import { SliderDemo } from '@/features/_components/SliderDemo';
import { todoType } from '@/features/_types/type';
import { testTodo } from '@/features/_utils/util';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
// import { ArrowUpDown } from 'lucide-react';
import * as React from 'react';

const data: todoType[] = testTodo({ PROJECT_NO: 33, USER_ID: 8 });

const checkboxSize = 30;
const dateSize = 90;
const contentSize = 400;
const titleSize = 150;
const statusSize = 60;
const progressSize = 100;

export const columns: ColumnDef<todoType>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    size: checkboxSize,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'TODO_NO',
    header: '',
    cell: () => <></>,
    size: 0,
    maxSize: 0,
    minSize: 0,
  },
  {
    accessorKey: 'title',
    header: '제목',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('title')}</div>
    ),
    size: titleSize,
  },
  {
    accessorKey: 'status',
    header: '상태',
    cell: ({ row }) => (
      <div className='lowercase'>
        {row.getValue('status') ? '완료' : '미완료'}
      </div>
    ),
    size: statusSize,
  },
  {
    accessorKey: 'progress',
    header: () => '진행상황',
    cell: ({ row }) => (
      <div className=' font-medium items-center justify-center'>
        <SliderDemo defaultValue={[row.getValue('progress')]}></SliderDemo>
      </div>
    ),
    size: progressSize,
  },
  {
    accessorKey: 'start_date',
    header: () => '시작일자',
    cell: ({ row }) => (
      <div className=' font-medium'>{row.getValue('start_date')}</div>
    ),
    size: dateSize,
  },
  {
    accessorKey: 'goal_date',
    header: () => '목표일자',
    cell: ({ row }) => (
      <div className=' font-medium'>{row.getValue('goal_date')}</div>
    ),
    size: dateSize,
  },
  {
    accessorKey: 'complete_date',
    header: () => '완료일자',
    cell: ({ row }) => (
      <div className=' font-medium'>{row.getValue('complete_date')}</div>
    ),
    size: dateSize,
  },
  {
    accessorKey: 'content',
    header: () => '내용',
    cell: ({ row }) => (
      <div className=' font-medium'>{row.getValue('content')}</div>
    ),
    size: contentSize,
  },
];

export function TodoPageMain() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    enableColumnResizing: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const pages = [...new Array(table.getPageCount())].map((_, i) => i + 1);
  React.useLayoutEffect(() => {
    table.setPageSize(9);
  }, [table]);

  return (
    <div className='w-full '>
      <div className='flex p-4 justify-between'>
        <Input
          placeholder='Filter title...'
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        />
        <div className=' pr-4'>
          <DropDown
            onDeleteNo={table
              .getSelectedRowModel()
              .rows.map((item) => item.getValue('TODO_NO'))}
          ></DropDown>
        </div>
      </div>
      <div className='rounded-md'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={' text-center px-0'}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className=' text-center px-0'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 absolute bottom-0 p-4 w-full'>
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='space-x-2'>
          <div className=' flex'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => {
                table.previousPage();
              }}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Pagination>
              <PaginationContent>
                {pages.map((item) => (
                  <PaginationItem key={item}>
                    <PaginationLink
                      onClick={() => table.setPageIndex(item - 1)}
                    >
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
            </Pagination>
            <Button
              variant='outline'
              size='sm'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
