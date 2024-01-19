import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinkItems.css"

const NavLinkItem = ({ navLink, onclose }) => {
  return (
    <li className="pb-[1rem] link">
      <NavLink className='' to={navLink.path}>{navLink.link}</NavLink>
    </li>
  );
};

export default NavLinkItem;
