import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkItem = ({ navLink }) => {
  return (
    <li>
      <NavLink to={navLink.path}>{navLink.link}</NavLink>
    </li>
  );
};

export default NavLinkItem;
