import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const usePageDir = () => {
  const router = useRouter();
  const [pageDir, setPageDir] = useState<'ltr' | 'rtl'>(
    router.locale === 'fa' ? 'rtl' : 'ltr' || 'ltr'
  );

  useEffect(() => {
    if (!router.locale) return;

    setPageDir(router.locale === 'fa' ? 'rtl' : 'ltr');
  }, [router.locale]);

  return pageDir;
};

export default usePageDir;
