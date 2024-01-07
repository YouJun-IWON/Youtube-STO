import NextAuth, { type DefaultSession } from 'next-auth';
import { User_user_type } from '@prisma/client';

export type ExtendedUser = DefaultSession['user'] & {
  id: string;
  user_type: User_user_type;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}

// import { JWT } from '@auth/core/jwt';
// import { User_user_type } from '@prisma/client';

// declare module '@/auth/core/jwt' {
//   interface JWT {
//     user_type?: 'User' | 'Admin' | 'Youtuber';
//   }
// }
