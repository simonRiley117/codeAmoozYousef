import React from "react";
import { NavLink } from "react-router-dom";

const SidebarMenuItem = ({ url, icon, text, expand, ...rest }) => {
  return (
    <li className="sidebarMenu__li d-flex-align" {...rest}>
      <NavLink
        to={url}
        className={({ isActive }) =>
          isActive ? "d-flex-align selected" : "d-flex-align"
        }
        end
      >
        {!expand ? (
          <>
            <div className="menuIcon">{icon}</div>
            <p>{text}</p>
          </>
        ) : (
          <div className="menuIcon">{icon}</div>
        )}
      </NavLink>
    </li>
  );
};

export default SidebarMenuItem;
