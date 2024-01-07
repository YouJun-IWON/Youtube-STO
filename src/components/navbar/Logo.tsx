import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.png' width={100} height={100} alt='logo' />
    </Link>
  );
};

export default Logo;
