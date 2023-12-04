import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MobileMenu({ onClose }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    onClose();
  };

  return (
    <div className="md:hidden">
      <button onClick={handleOpenMenu} className="p-4 focus:outline-none">
        ☰
      </button>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white">
          <div className="flex justify-end p-4">
            <button onClick={handleCloseMenu} className="focus:outline-none">
              ✕
            </button>
          </div>

          <div className="flex flex-col items-center">
            {}
            <NavLink to="/Login" onClick={handleCloseMenu} className="hover:underline p-2">
              Login
            </NavLink>
            <NavLink to="/Signin" onClick={handleCloseMenu} className="hover:underline p-2">
              Signin
            </NavLink>

            {}
            <NavLink to="/Pupilajes" onClick={handleCloseMenu} className="hover:underline p-2">
              Pupilajes
            </NavLink>
            <NavLink to="/Marketplace" onClick={handleCloseMenu} className="hover:underline p-2">
              Marketplace
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;