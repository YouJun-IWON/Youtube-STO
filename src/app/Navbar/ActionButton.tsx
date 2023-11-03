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

import { useSession } from 'next-auth/react';

import { useRouter } from 'next/navigation';

import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import LoginAvatar from './LoginAvatar';

const ActionButton = () => {
  const router = useRouter();

  const { data: session } = useSession();

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
                  <Link href='/'>Sign in</Link>
                  <Link href='/'>STO Register</Link>
                  <Link href='/'>STO Market</Link>
                  <Link href='/'>상품소개</Link>
                  <Link href='/'>STO 절차</Link>
                  <Link href='/'>Contact</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className='hidden md:flex md:space-x-4'>
        {session && session.user ? (
          <LoginAvatar />
        ) : (
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
