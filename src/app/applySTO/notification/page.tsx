import { Separator } from '@/components/ui/separator';
import { NotificationsForm } from '@/app/applySTO/notification/notifications-form';

export default function SettingsNotificationsPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>STO 조건 설정</h3>
        <p className='text-sm text-muted-foreground'>
          STO 조건을 설정할 수 있는 페이지 입니다.
        </p>
      </div>
      <Separator />
      {/* <NotificationsForm /> */}
    </div>
  );
}
