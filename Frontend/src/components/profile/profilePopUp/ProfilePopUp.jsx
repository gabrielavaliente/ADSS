import React from "react";
import { NavLink } from "react-router-dom";


function ProfilePopup() {

    
  return (
    <ul className="absolute left-0 mt-2 bg-white border rounded-md shadow-md">
      <li className="py-2 px-4 hover:bg-gray-100">
        <NavLink to="/Profile" className="text-gray-700">
          Mi perfil
        </NavLink>
      </li>
      <li className="py-2 px-4 hover:bg-gray-100">
        <NavLink to="/MyAdds" className="text-gray-700">
          Mis anuncios
        </NavLink>
      </li>
      <li className="py-2 px-4 hover:bg-gray-100">
        <NavLink to="/MisHospedajes" className="text-gray-700">
          Mis hospedajes
        </NavLink>
      </li>
    </ul>
  );
}

export default ProfilePopup;
