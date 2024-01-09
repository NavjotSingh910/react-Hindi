import React from "react";
import { NavLink } from "react-router-dom";
function NavLinkOption({label=""}) {
  return (
    <li>
      <NavLink
        to={label.toLowerCase()==='user'?'/user/Navjot':`${label.toLowerCase()}`}
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 border-b ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        {(label!==""?label:"Home").toUpperCase()}
      </NavLink>
    </li>
  );
}

export default NavLinkOption;
