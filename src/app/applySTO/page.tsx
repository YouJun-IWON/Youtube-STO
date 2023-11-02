import { Separator } from "@/components/ui/separator"

import { ProfileForm } from "@/app/applySTO/profile-form"

export default function SettingsSTO() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">인적사항</h3>
        <p className="text-sm text-muted-foreground">
          유튜브 소유에 대한 첫번째 인증입니다. 본인이 누구인지 순서에 따라 기입해 주세요.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}