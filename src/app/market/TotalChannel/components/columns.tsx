'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';

import { labels, priorities, statuses } from '@/data/data';
import { Data } from '@/data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeartIcon } from '@/components/svgs/heartIcon';
import { Button } from '@nextui-org/react';

import { Icons } from '@/components/icons';
import { DataTableColumnHeaderPrice } from './data-table-column-headerPrice';

export const columns: ColumnDef<Data>[] = [
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Data" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'image',
    header: ({ column }) => (
      <DataTableColumnHeader filter={false} column={column} title='대표사진' />
    ),
    cell: ({ row }) => {
      return (
        <Avatar className='flex items-center'>
          <AvatarImage src={row.getValue('image')} />
          <AvatarFallback>{row.getValue('title')}</AvatarFallback>
        </Avatar>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'label',
    header: ({ column }) => (
      <DataTableColumnHeader filter={false} column={column} title='테마' />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.getValue('label')
      );

      if (!label) {
        return null;
      }

      return (
        <div className='flex space-x-2'>
          {label && <Badge variant='outline'>{label.label}</Badge>}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='유튜브명' />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className='flex space-x-2'>
          {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
          <span className='max-w-[500px] truncate font-medium'>
            {row.getValue('title')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <DataTableColumnHeaderPrice column={column} title='가격' />
    ),
    cell: ({ row }) => {
      const price = row.getValue('price');
      const priceString = price!.toString().replace('.00', '');
      const formattedPrice = `${priceString}`;

      return (
        <div className='flex space-x-2'>
          <span className='max-w-[500px] truncate font-medium'>
            {Number(formattedPrice).toLocaleString()} 원
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'rate',
    header: ({ column }) => (
      <DataTableColumnHeader
        filter={false}
        number={true}
        column={column}
        title='변동률'
      />
    ),
    cell: ({ row }) => {
      const rate = Number(row.getValue('rate'));
      const price = row.getValue('price');
      const priceString = price!.toString().replace('.00', '');
      const formattedPrice = Number(`${priceString}`);

      return (
        <div className='flex space-x-2'>
          <span className='max-w-[500px] truncate font-medium'>
            {rate == 0 ? (
              `${formattedPrice * rate} 원`
            ) : rate > 0 ? (
              <span style={{ color: 'red' }} className='flex'>
                +{Number(((formattedPrice * rate) / 100).toFixed(0)).toLocaleString()} 원 (+
                {rate}
                %)
                <Icons.up className='ml-2 h-4 w-3' />
              </span>
            ) : (
              <span style={{ color: 'blue' }} className='flex'>
                {Number(((formattedPrice * rate) / 100).toFixed(0)).toLocaleString()} 원 ({rate}
                %)
                <Icons.down className='ml-2 h-4 w-3' />
              </span>
            )}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'transaction',
    header: ({ column }) => (
      <DataTableColumnHeaderPrice column={column} title='거래금액(24H)' />
    ),
    cell: ({ row }) => {
      const price = row.getValue('transaction');
      const priceString = price!.toString().replace('.00', '');
      const formattedPrice = `${priceString}`;

      return (
        <div className='flex space-x-2'>
          <span className='max-w-[500px] truncate font-medium'>
            ≈ {Number(formattedPrice).toLocaleString()} 원
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'marketCapa',
    header: ({ column }) => (
      <DataTableColumnHeaderPrice column={column} title='시가총액' />
    ),
    cell: ({ row }) => {
      const price = row.getValue('marketCapa');
      const priceString = price!.toString().replace('.00', '');
      const formattedPrice = `${priceString}`;

      return (
        <div className='flex space-x-2'>
          <span className='max-w-[500px] truncate font-medium'>
            {Number(formattedPrice).toLocaleString()} 원
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader filter={false} column={column} title='상태' />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div className='flex w-[100px] items-center'>
          {status.icon && (
            <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <DataTableColumnHeader
        filter={false}
        column={column}
        title='조회수 Flow'
      />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue('priority')
      );

      if (!priority) {
        return null;
      }

      return (
        <div className='flex items-center'>
          {priority.icon && (
            <priority.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   accessorKey: 'like',
  //   cell: ({ row }) => {
  //     return (
  //       <Button
  //         isIconOnly
  //         className='text-default-900/60 data-[hover]:bg-foreground/10 translate-y-[2px] translate-x-2'
  //         radius='full'
  //         variant='light'
  //         onPress={() => console.log(row.getValue('id'))}
  //       >
  //         <HeartIcon
  //           className={
  //             row.getValue('like') ? '[&>path]:stroke-transparent' : ''
  //           }
  //           fill={row.getValue('like') ? 'red' : 'none'}
  //         />
  //       </Button>
  //     );
  //   },
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
