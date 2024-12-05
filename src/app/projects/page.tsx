import React from 'react';

import type { Metadata } from 'next';

import { Nav, Grid, Container } from '@/components/index';
import { ProjectsSidebar } from '@/components/projects/ProjectsSidebar/ProjectsSidebar';

import styles from '@/styles/pages/projects.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Projects',
  icons: '/favicon/favicon.svg',
};

export default function ProjectsPage() {
  return (
    <Grid
      isSection
      gap="30px"
    >
      <Nav
        title="Projects"
        buttonLabel="Add Project"
        isRenderBackLink={false}
      />
      <Container className={styles['projectsContainer']}>
        <ProjectsSidebar />
      </Container>
    </Grid>
  );
}
