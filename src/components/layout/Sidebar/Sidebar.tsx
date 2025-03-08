import React, { type FC } from 'react';

import {
  SidebarNav,
  Container,
  SidebarLogout,
  SidebarLogo,
  Aside,
} from '@/index/index';

import { SidebarProps } from '@/interfaces/SidebarInterface';

import styles from '@/components/layout/Sidebar/Sidebar.module.scss';

export const Sidebar: FC<SidebarProps> = ({ onOpenModal }) => {
  return (
    <Aside
      role="aside"
      className={styles['sidebar']}
    >
      <Container
        role="container"
        className={styles['sidebarContainer']}
      >
        <Container className={styles['sidebarLogoNavContainer']}>
          <SidebarLogo />
          <SidebarNav />
        </Container>
        <SidebarLogout onOpenModal={onOpenModal} />
      </Container>
    </Aside>
  );
};
