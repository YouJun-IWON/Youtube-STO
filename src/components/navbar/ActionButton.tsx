'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { useRouter } from 'next/navigation';

import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import LoginAvatar from './LoginAvatar';
import { User } from '@prisma/client';

interface NavbarProps {
  currentUser?: any | null;
}

const ActionButton = ({ currentUser }: NavbarProps) => {
  const router = useRouter();

  console.log('ActionButton', currentUser);

  return (
    <div>
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className='flex flex-col space-y-4 items-center w-full text-lg text-black mt-10'>
                  <Link href='/auth'>로그인</Link>
                  <Link href='/applySTO'>STO 신청하기</Link>
                  <Link href='/market'>STO Market</Link>
                  <Link href='/STOFlow'>STO 동향</Link>
                  <Link href='/serviceCenter'>고객센터</Link>
                  {/* <Link href='/'>My Page</Link> */}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className='hidden md:flex md:space-x-4'>
        {currentUser?.user && currentUser?.user.email ? (
          <LoginAvatar currentUser={currentUser.user} />
        ) : (
          // <LoginAvatar currentUser={currentUser} />
          <Button
            onClick={() => router.push('/auth')}
            className='text-md bg-red-500'
          >
            Sign in
          </Button>
        )}
      </div>
    </div>
  );
};

export default ActionButton;
