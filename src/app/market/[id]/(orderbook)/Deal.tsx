import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  getKeyValue,
} from '@nextui-org/react';
import { useInfiniteScroll } from '@nextui-org/use-infinite-scroll';
import { useAsyncList } from '@react-stately/data';

export default function Deal() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasMore, setHasMore] = React.useState(false);

  let list = useAsyncList({
    async load({ signal, cursor }: any) {
      if (cursor) {
        setIsLoading(false);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(
        cursor || 'https://swapi.py4e.com/api/people/?search=',
        { signal }
      );
      let json = await res.json();

      setHasMore(json.next !== null);

      return {
        items: json.results,
        cursor: json.next,
      };
    },

    async sort({items, sortDescriptor}) {
      return {
        items: items.sort((a: any, b: any) => {
          let first = a[sortDescriptor.column!];
          let second = b[sortDescriptor.column!];
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
    
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: list.loadMore,
  });

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    [],
  );



  return (
    <Table
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      isHeaderSticky

      aria-label='deal'
      baseRef={scrollerRef}
      bottomContent={
        hasMore ? (
          <div className='flex w-full justify-center'>
            <Spinner ref={loaderRef} color='danger' />
          </div>
        ) : null
      }
      classNames={{
        base: 'max-h-[520px] overflow-scroll ',
        table: 'min-h-[400px] ',
        wrapper: 'rounded-none',
        // th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      }}
    >
      <TableHeader>
        <TableColumn allowsSorting key='name'>채결 가격 (원)</TableColumn>
        <TableColumn allowsSorting key='height'>수량 (주)</TableColumn>
        <TableColumn allowsSorting key='mass'>거래시간</TableColumn>
      </TableHeader>
      <TableBody
      className='rounded-none'
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner color='danger' />}
      >
        {(item: any) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
