'use client';

import React, { useEffect, useState, type FC } from 'react';
import { useMutation } from '@tanstack/react-query';

import Link from 'next/link';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { Button } from '@/components/index';

import { LogoutUser } from '@/api/logout';

import { toast, Toaster } from 'react-hot-toast';

import { IsVisibleMenu, UserName } from '@/types/header';

import { NAV_PATHS } from '@/enums/navPaths';

import styles from '@/components/layout/Header/Header.module.scss';

interface HeaderLogoutProps {
  validateUserName: UserName;
}

export const HeaderLogout: FC<HeaderLogoutProps> = ({ validateUserName }) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState<IsVisibleMenu>(false);

  useEffect(() => {
    const storedState = localStorage.getItem('isOpen');
    if (storedState) {
      setIsVisibleMenu(JSON.parse(storedState));
    }
  }, []);

  const handleShowMenu = () => {
    setIsVisibleMenu((prevVisibleState) => {
      const newState = !prevVisibleState;
      localStorage.setItem('isOpen', JSON.stringify(newState));
      return newState;
    });
  };

  const userLogoutMutation = useMutation({
    mutationFn: LogoutUser,
    onSuccess: () => {
      toast.success('User is logout!');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('registration');
      localStorage.removeItem('isOpen');

      window.location.reload();
    },
    onError: (error) => {
      toast.error(error.message || 'An error occurred during logout');
    },
  });

  const handleLogoutUser = () => {
    userLogoutMutation.mutate();
  };

  return (
    <>
      <Toaster />
      <div
        title="Open menu"
        className={`${styles['headerUserLogout']} ${isVisibleMenu ? styles['visibleMenu'] : ''} `}
      >
        {validateUserName && (
          <Button
            type="button"
            onClick={handleShowMenu}
            className={styles['headerUserLoginButton']}
          >
            <h5 className={styles['headerUserLoginBanner']}>
              {validateUserName}
              <span
                id={styles['rotateIconContainer']}
                className={
                  isVisibleMenu
                    ? `${styles['rotateIcon']} ${styles['rotate']}`
                    : styles['rotateIcon']
                }
              >
                <ExpandMoreIcon />
              </span>
            </h5>
          </Button>
        )}
        {isVisibleMenu && (
          <div className={styles['dropdownMenu']}>
            <Button
              title="Profile"
              type="button"
              className={styles['dropdownItem']}
            >
              <AccountBoxIcon />
              <Link
                href={NAV_PATHS.PROFILE}
                className={styles['profileLink']}
              >
                Profile
              </Link>
            </Button>
            <Button
              title="Logout"
              type="button"
              className={styles['dropdownItem']}
              onClick={handleLogoutUser}
            >
              <LogoutIcon />
              Logout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
