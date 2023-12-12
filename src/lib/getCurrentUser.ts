import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

   

    if (!session?.user.email) {
      return null;
    }

    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    const testUser = {...currentUser, won: 5349939, sto: 10}

    return testUser;
  } catch (err) {
    return null;
  }
}
