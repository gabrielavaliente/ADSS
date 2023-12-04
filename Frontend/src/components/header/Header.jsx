import React, { useState } from "react";
import adssLogo from "../../img/ADDS.png";
import Blocks from "./navigation/blocks/Blocks";
import Navigation from "./navigation/Navigation";
import MobileMenu from "./MenuHamburger/MobileMenu";
import { NavLink } from "react-router-dom";
import ProfileHeader from "./navigation/profileHeader/ProfileHeader";
import useUser from "../../hooks/useUser";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLogged } = useUser();

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#F4CFCA] mb-10">
      <div className="flex items-center justify-between px-9">
        <NavLink to="/">
          <img alt="ADSS" src={adssLogo} className="w-20 h-auto" />
        </NavLink>

        {isLogged && (
          <div className="hidden md:flex lg:flex items-center justify-between px-9">
            <Blocks />
          </div>
        )}

        <div className="hidden md:flex lg:flex items-center md:items-center lg:items-center md:justify-between lg:justify-between md:px-9 lg:px-9">
          <div className="flex items-center">
            <ProfileHeader />
          </div>
          <Navigation />
        </div>

        <div className="md:hidden lg:hidden flex items-center">
          <ProfileHeader />
          <button
            onClick={handleToggleMobileMenu}
            className="sm:p-4 md:hidden p-4 focus:outline-none"
          >
            ☰
          </button>
          {isMobileMenuOpen && <MobileMenu onClose={handleCloseMobileMenu} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
