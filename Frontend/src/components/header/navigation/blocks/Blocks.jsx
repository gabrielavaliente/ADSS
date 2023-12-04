import React from 'react';
import { NavLink } from 'react-router-dom';

function Blocks() {
  return (
    <nav>
      <ul className="space-x-7 md:space-x-5 p-4 md:p-2 flex">
        <li>
        <NavLink to="/Pupilajes" className="hover:underline" >Pupilajes</NavLink>
        </li>
        <li>
        <NavLink to="/Marketplace" className="hover:underline" >Marketplace</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Blocks;