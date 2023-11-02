import { Separator } from "@/components/ui/separator"
import { AccountForm } from "@/app/applySTO/account/account-form"

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">계좌 및 신원인증</h3>
        <p className="text-sm text-muted-foreground">
          STO 신청자의 계좌 인증을 위한 페이지 입니다.
        </p>
      </div>
      <Separator />
      {/* <AccountForm /> */}
    </div>
  )
}