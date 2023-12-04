import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfilePopup from "../../../profile/profilePopUp/ProfilePopUp";

function ProfileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative">
      <ul>
        <li>
          <button
            onClick={handleToggleMenu}
            className="hover:underline focus:outline-none"
          >
            Perfil
          </button>
        </li>
      </ul>
      {isMenuOpen && <ProfilePopup />}
    </nav>
  );
}

export default ProfileHeader;

