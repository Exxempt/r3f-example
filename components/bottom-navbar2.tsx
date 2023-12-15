import React, { useState } from 'react';
import PopoverDrawer from '../components/PopoverDrawer';
import Image from 'next/image';
import { CameraIcon, Cog6ToothIcon, HomeIcon } from '@heroicons/react/24/outline';
import ButtonInterface from './ButtonInterface';

// https://heroicons.com/
export function BottomNav() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-4 shadow-lg">
      <div className="flex-1 flex justify-center">
        <button className="text-gray-500 hover:text-gray-700">
          <HomeIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1">
        <button className="flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full text-white shadow-xl border-4 border-white absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <CameraIcon className="h-8 w-8" />
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <button onClick={() => setDrawerOpen(true)} className="text-gray-500 hover:text-gray-700">
          <Cog6ToothIcon className="h-6 w-6" />
        </button>
        <PopoverDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        {/* Content of the drawer */}
        {/* <p>This is the content of the drawer.</p> */}
        <ButtonInterface /> 
        <button onClick={() => setDrawerOpen(false)}>Close</button>
      </PopoverDrawer>
      </div>
    </div>
  );
};