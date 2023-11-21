import { Metadata } from 'next';
import Image from 'next/image';

import { Separator } from '@/components/ui/separator';

import { SidebarNav } from '@/app/applySTO/components/sidebar-nav';

export const metadata: Metadata = {
  title: 'Apply for STO',
  description: 'STO application procedure page.',
};

const sidebarNavItems = [
  {
    title: '1. 인적 사항',
    href: '/applySTO',
  },
  {
    title: '2. 계좌 및 신원인증',
    href: '/applySTO/account',
  },
  {
    title: '3. Youtube 정보',
    href: '/applySTO/appearance',
  },
  {
    title: '4. STO 조건 설정',
    href: '/applySTO/notification',
  },
  {
    title: '5. 계약 조건 확인',
    href: '/applySTO/display',
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      {/* <div className='md:hidden'>
        <Image
          src='/examples/forms-light.png'
          width={1280}
          height={791}
          alt='Forms'
          className='block dark:hidden'
        />
        <Image
          src='/examples/forms-dark.png'
          width={1280}
          height={791}
          alt='Forms'
          className='hidden dark:block'
        />
      </div> */}
      <div className=' space-y-6 p-10 pb-16 md:block max-w-4xl mx-auto'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>STO 신청하기</h2>
          <p className='text-muted-foreground'>
            보다 안전하고 신속하게 당신의 유튜브 자산을 STO로 만들어 드립니다.
          </p>
          <p className='text-muted-foreground'>
            아래의 순서대로 올바른 정보를 기입해주세요.
          </p>
        </div>
        <Separator className='my-6' />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='-mx-4 lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className='flex-1 lg:max-w-2xl'>{children}</div>
        </div>
      </div>
    </>
  );
}
