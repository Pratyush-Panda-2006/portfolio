'use client';

import React from 'react';
import { useDrawer } from '@/components/context/DrawerContext';
import { SystemsToolingDrawer } from './SystemsToolingDrawer';
import { ProjectsModal } from './ProjectsModal';
import { ContactModal } from './ContactModal';

export const ModalsContainer: React.FC = () => {
  const {
    isToolingOpen,
    closeTooling,
    isProjectsOpen,
    closeProjects,
    isContactOpen,
    closeContact,
    openContact,
  } = useDrawer();

  return (
    <>
      <SystemsToolingDrawer
        isOpen={isToolingOpen}
        onClose={closeTooling}
        onOpenContact={openContact}
      />
      <ProjectsModal
        isOpen={isProjectsOpen}
        onClose={closeProjects}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
      />
    </>
  );
};

