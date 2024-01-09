'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';

import { newVerification } from '@/auth-actions/new-verification';
import { FormError } from '../../_components/form-error';
import { FormSuccess } from '../../_components/form-success';

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError('토큰이 없습니다.');
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('무엇인가 잘못되었습니다.');
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className='flex flex-col items-center w-full justify-center gap-10'>
      <div className='text-center space-y-4'>
        <div className='text-6xl'>🔐</div>
        <div className='text-xl font-bold text-slate-700'>
          인증 번호를 입력해주세요.
        </div>
      </div>

      {!success && !error && <BeatLoader />}

      <FormSuccess message={success} />
      {!success && <FormError message={error} />}

      <Link href='/auth' className='underline underline-offset-2'>
        로그인으로 돌아가기
      </Link>
    </div>
  );
};
