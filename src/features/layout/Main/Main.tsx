'use client';

import React, { FC, ReactNode } from 'react';

import { Header, Grid } from '@/index';

import { usePathname } from 'next/navigation';
import { NAV_PATHS } from '@/shared/enums/navPaths';

import styles from './Main.module.scss';

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  const pathname = usePathname();

  const isHeaderRender =
    pathname === NAV_PATHS.SIGN_IN || pathname === NAV_PATHS.MULTI_STEP_SIGN_IN;

  return (
    <Grid
      role="container"
      gap="50px"
      gridTemplateRows={isHeaderRender ? '1fr' : 'auto 1fr'}
    >
      {!isHeaderRender && <Header />}
      <main
        role="main"
        className={styles['main']}
      >
        {children}
      </main>
    </Grid>
  );
};
