import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Cloud,
  CreditCard,
  Youtube,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User as UserSession } from '@prisma/client';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

interface NavbarProps {
  currentUser?: any | null;
}

const LoginAvatar = ({ currentUser }: NavbarProps) => {
  const router = useRouter();
  return (
    <div className='cursor-pointer'>
  
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={currentUser?.image ?? ''} alt='@avatar' />
            <AvatarFallback>{currentUser?.name ?? ''}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>{currentUser?.name ?? ''}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push('/MyPage')}>
              <User className='mr-2 h-4 w-4' />
              <span>My Page</span>
             
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/MyPage/Account')}>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>입출금</span>
            </DropdownMenuItem>
         
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => router.push('/MyPage/MyYoutubers')}
            >
              <Youtube className='mr-2 h-4 w-4' />
              <span>My Youtubers</span>
            </DropdownMenuItem>
         
          </DropdownMenuGroup>

          <DropdownMenuItem onClick={() => router.push('/MyPage/MySTO')}>
            <LifeBuoy className='mr-2 h-4 w-4' />
            <span>My STO</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem className='text-red-500' onClick={() => signOut()}>
            <LogOut className='mr-2 h-4 w-4' />
            <span>Log out</span>
          
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LoginAvatar;
