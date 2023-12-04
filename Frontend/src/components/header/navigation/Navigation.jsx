import { NavLink } from 'react-router-dom';
import React from 'react';
import useUser from '../../../hooks/useUser';


function Navigation() {

  //const { isLogged, login } = useUSer();
  const { isLogged, logout } = useUser()

  const handleClick= e => {
    e.preventDefault()
    logout()
  }
  return (

    <nav>
      <div className="flex space-x-7 p-4">
        {
          isLogged
            ? <>
              <li>
                <NavLink to={"/"} onClick={'logout'} className="hover:underline" >Log Out</NavLink>
              </li>
            </>
            : <>
              <li>
                <NavLink to="/Login" className="hover:underline" >Log In</NavLink>
              </li>
              <li>
                <NavLink to="/Signin" className="hover:underline" >Sign In</NavLink>
              </li>
            </>
        }
      </div>
    </nav>
  );
}

export default Navigation;



