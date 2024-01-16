import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinkItems.css"

const NavLinkItem = ({ navLink}) => {
  return (
    <li  className="pb-[1rem] navItems">
      <NavLink to={navLink.path} className="link">{navLink.link}</NavLink>
    </li>
  );
};

export default NavLinkItem;
