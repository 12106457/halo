'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define a type for the context
interface PopupContextProps {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

// Create a Context
const PopupContext = createContext<PopupContextProps | undefined>(undefined);

// Create a custom hook for easier use of the context
export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};

// Create a provider component
export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
