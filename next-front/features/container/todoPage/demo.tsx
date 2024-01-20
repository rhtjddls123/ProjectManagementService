'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { todoType } from '@/features/_types/type';
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

const data: todoType[] = [
  {
    PROJECT_NO: 42,
    USER_ID: 8,
    title: 'jkl',
    content: 'uvwxy',
    status: true,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 32,
    USER_ID: 8,
    title: 'jkl',
    content: 'fghij',
    status: false,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 39,
    USER_ID: 2,
    title: 'pqr',
    content: 'jklmn',
    status: true,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 33,
    USER_ID: 4,
    title: 'ghi',
    content: 'efghi',
    status: true,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 22,
    USER_ID: 4,
    title: 'stu',
    content: 'opqrs',
    status: false,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 18,
    USER_ID: 3,
    title: 'jkl',
    content: 'fghij',
    status: false,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 47,
    USER_ID: 3,
    title: 'jkl',
    content: 'opqrs',
    status: true,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 46,
    USER_ID: 3,
    title: 'stu',
    content: 'jklmn',
    status: true,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 47,
    USER_ID: 4,
    title: 'stu',
    content: 'jklmn',
    status: true,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 48,
    USER_ID: 4,
    title: 'stu',
    content: 'jklmn',
    status: true,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
  {
    PROJECT_NO: 49,
    USER_ID: 4,
    title: 'stu',
    content: 'jklmn',
    status: true,
    create_date: '2024-01-01',
    start_date: '2020-01-01',
    goal_date: '2020-01-02',
  },
];

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
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: '제목',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('title')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: '상태',
    cell: ({ row }) => (
      <div className='lowercase'>
        {row.getValue('status') ? '완료' : '미완료'}
      </div>
    ),
  },
  {
    accessorKey: 'USER_ID',
    header: () => '진행상황',
    cell: ({}) => <div className=' font-medium'></div>,
  },
  {
    accessorKey: 'start_date',
    header: () => '시작일자',
    cell: ({ row }) => (
      <div className=' font-medium'>{row.getValue('start_date')}</div>
    ),
  },
  {
    accessorKey: 'goal_date',
    header: () => '목표일자',
    cell: ({ row }) => (
      <div className=' font-medium'>{row.getValue('goal_date')}</div>
    ),
  },
  {
    accessorKey: 'PROJECT_NO',
    header: () => '완료일자',
    cell: ({}) => <div className=' font-medium'>{}</div>,
  },
  {
    accessorKey: 'content',
    header: () => '내용',
    cell: ({ row }) => (
      <div className=' font-medium'>{row.getValue('content')}</div>
    ),
  },
];

export function DataTableDemo() {
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
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  React.useLayoutEffect(() => {
    table.setPageSize(9);
  }, [table]);

  return (
    <div className='w-full '>
      <div className='flex items-center py-4'>
        <Input
          placeholder='Filter title...'
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        />
      </div>
      <div className='rounded-md '>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className=' text-center px-0'>
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
      <div className='flex items-center justify-end space-x-2 py-4'>
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='space-x-2'>
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
  );
}
