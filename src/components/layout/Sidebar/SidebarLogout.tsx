import React, { type FC } from 'react';

import Image from 'next/image';

import { Button, Div } from '@/index/index';

import styles from '@/components/layout/Sidebar/Sidebar.module.scss';

interface SidebarLogoutProps {
  onOpenModal: () => void;
}

export const SidebarLogout: FC<SidebarLogoutProps> = ({ onOpenModal }) => {
  return (
    <Div className={styles['sidebarLogout']}>
      <Div className={styles['sidebarLogoutBlock']}>
        <Image
          src={'/images/sidebar/support.svg'}
          alt="Support Image"
          width={168}
          height={214}
          priority
        />
        <Button
          type="button"
          className={styles['sidebarSupportButton']}
          onClick={onOpenModal}
        >
          <Image
            src={'/icons/sidebar-icons/chat-icon.svg'}
            alt="Support Image"
            width={24}
            height={24}
          />{' '}
          Support
        </Button>
      </Div>
    </Div>
  );
};
