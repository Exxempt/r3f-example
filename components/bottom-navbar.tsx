import React, { useState } from 'react';
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md';

type PopoverKey = 'home' | 'favorites' | 'profile';

export function BottomNavbar() {

    const [showPopover, setShowPopover] = useState<{ [key in PopoverKey]: boolean }>({
        home: false,
        favorites: false,
        profile: false
    });

    const togglePopover = (name: PopoverKey) => {
        setShowPopover(prev => ({ ...prev, [name]: !prev[name] }));
      };
    return (
    <div className="fixed inset-x-0 bottom-0 bg-gray-800 text-white text-center">
      <div className="max-w-md mx-auto flex justify-around">
        {['home', 'favorites', 'profile'].map((item) => (
          <div key={item} className="relative">
            <button onClick={() => togglePopover(item as PopoverKey)} className="flex flex-col items-center w-full py-2 focus:outline-none hover:bg-gray-700">
              {item === 'home' && <MdHome className="text-2xl hover:text-gray-300 hover:scale-110 transition-all" />}
              {item === 'favorites' && <MdFavorite className="text-2xl hover:text-gray-300 hover:scale-110 transition-all" />}
              {item === 'profile' && <MdPerson className="text-2xl hover:text-gray-300 hover:scale-110 transition-all" />}
              <span className="text-xs">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
            </button>
            {showPopover[item as PopoverKey] && (
              <div className="absolute bottom-full mb-2 p-3 bg-white text-gray-800 rounded">
                {item.charAt(0).toUpperCase() + item.slice(1)} Popover Content
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    );
}