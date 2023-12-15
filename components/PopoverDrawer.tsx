import React, { ReactNode } from 'react';

type PopoverDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const PopoverDrawer: React.FC<PopoverDrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 transform transition-transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        } bg-white p-4 shadow-xl`}
      >
        {children}
      </div>
    </div>
  );
};

export default PopoverDrawer;