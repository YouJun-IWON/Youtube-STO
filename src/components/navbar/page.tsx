import { User } from '@prisma/client';
import ActionButton from './ActionButton';
import Logo from './Logo';
import { NavigationMenuBar } from './NavigationBar';

interface NavbarProps {
  currentUser?: any | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className='flex justify-between items-center px-10 border-b'>
      <Logo />
      <NavigationMenuBar />
      <ActionButton currentUser={currentUser} />
    </div>
  );
};

export default Navbar;
