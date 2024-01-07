import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'

export function RecentSales() {
  return (
    <div className="space-y-8 w-full">
      <div className="flex items-center ">
      
         
          <p>보유자산</p>
     
        <div className="ml-4">
          <p className=" font-medium leading-none">STO 이름</p>
         
        </div>
        <div className="ml-auto font-medium">보유 수량</div>
        <div className="ml-auto font-medium">매수 평균가</div>
        <div className="ml-auto font-medium">평가 금액</div>
        <div className="ml-auto font-medium">평가 손익 (%)</div>
      </div>

      <Separator />

      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/288.jpg" alt="Avatar" />
          <AvatarFallback>Ho</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
          hoho STO
          </p>
        </div>
        <div className="ml-auto font-medium">20 hoho</div>
        <div className="ml-auto font-medium">50,000 ￦</div>
        <div className="ml-auto font-medium">1,000,000 ￦</div>
        <div className="ml-auto font-medium">+ 0 %</div>
      </div>
      
      
      
      
    </div>
  )
}
