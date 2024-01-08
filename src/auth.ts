import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './lib/db';
import authConfig from '@/auth.config';
import { getUserById } from './data/user';
import { User_user_type } from '@prisma/client';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      const response = await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });

      // if (!response.wallet_addr) {
      //   await fetch(`http://35.226.148.114:3004/wallet/create`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       userId: user.id,
      //     }),
      //   });
      // }
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") {
        return true;
      }
      const existingUser = await getUserById(user.id);

      // Prevent sign in without email verification
      if( !existingUser || !existingUser.emailVerified ) {

        // Add 2FA check

        return false;
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.user_type && session.user) {
        session.user.user_type = token.user_type as User_user_type;
      }

      if (token.user_type && session.user) {
        session.user.user_type = token.user_type as User_user_type;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.user_type = existingUser.user_type;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
