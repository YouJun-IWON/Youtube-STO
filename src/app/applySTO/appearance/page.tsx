import { Separator } from '@/components/ui/separator';
import { AppearanceForm } from '@/app/applySTO/appearance/appearance-form';

export default function SettingsAppearancePage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Youtube 정보</h3>
        <p className='text-sm text-muted-foreground'>
        Youtube 정보에 대해 기입하는 페이지 입니다.
        </p>
      </div>
      <Separator />
      {/* <AppearanceForm /> */}
    </div>
  );
}
