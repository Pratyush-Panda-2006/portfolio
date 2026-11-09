'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DrawerContextType {
  isToolingOpen: boolean;
  openTooling: () => void;
  closeTooling: () => void;
  isProjectsOpen: boolean;
  openProjects: () => void;
  closeProjects: () => void;
  isContactOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isToolingOpen, setIsToolingOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openTooling = () => setIsToolingOpen(true);
  const closeTooling = () => setIsToolingOpen(false);

  const openProjects = () => setIsProjectsOpen(true);
  const closeProjects = () => setIsProjectsOpen(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <DrawerContext.Provider
      value={{
        isToolingOpen,
        openTooling,
        closeTooling,
        isProjectsOpen,
        openProjects,
        closeProjects,
        isContactOpen,
        openContact,
        closeContact,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = (): DrawerContextType => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};

