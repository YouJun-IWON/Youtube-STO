import { Separator } from '@/components/ui/separator';
import { DisplayForm } from '@/app/applySTO/display/display-form';

export default function SettingsDisplayPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>계약 조건 확인</h3>
        <p className='text-sm text-muted-foreground'>
          다양한 계약 조건을 확인하고 동의를 할 수 있는 페이지 입니다.
        </p>
      </div>
      <Separator />
      {/* <DisplayForm /> */}
    </div>
  );
}
