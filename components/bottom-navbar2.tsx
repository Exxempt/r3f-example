'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PopoverDrawer from '../components/PopoverDrawer';
import ButtonInterface from './ButtonInterface';
import { CameraIcon, Cog6ToothIcon, HomeIcon } from '@heroicons/react/24/outline';

// https://heroicons.com/
interface BottomNavProps {
  onCapture?: () => void;
}

export function BottomNav({ onCapture }: BottomNavProps) {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const handleCapture = () => {
      const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;
      if (!canvas) return;

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `monke-${Date.now()}.png`;
      link.click();
    };
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-4 shadow-lg">
      <div className="flex-1 flex justify-center">
        <button onClick={() => router.push('/')} className="text-gray-500 hover:text-gray-700">
          <HomeIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1">
        <button
          onClick={() => (onCapture ? onCapture() : handleCapture())}
          className="flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full text-white shadow-xl border-4 border-white absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <CameraIcon className="h-8 w-8" />
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <button onClick={() => setDrawerOpen(true)} className="text-gray-500 hover:text-gray-700">
          <Cog6ToothIcon className="h-6 w-6" />
        </button>
        <PopoverDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
          <ButtonInterface />
          <button onClick={() => setDrawerOpen(false)}>Close</button>
        </PopoverDrawer>
      </div>
    </div>
  );
};
