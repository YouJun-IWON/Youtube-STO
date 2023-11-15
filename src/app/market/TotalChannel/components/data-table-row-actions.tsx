"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { labels } from "@/data/data"
import { dataSchema } from '@/data/schema' 
import { Button } from '@nextui-org/react'
import { HeartIcon } from '@/components/svgs/heartIcon'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const data = dataSchema.parse(row.original)

  return (
    <Button
    isIconOnly
    className='text-default-900/60 data-[hover]:bg-foreground/10 translate-y-[2px] translate-x-2'
    radius='full'
    variant='light'
    onPress={() => console.log(data.id)}
  >
    <HeartIcon
      className={
        data.like ? '[&>path]:stroke-transparent' : ''
      }
      fill={data.like ? 'red' : 'none'}
    />
  </Button>
  )
}