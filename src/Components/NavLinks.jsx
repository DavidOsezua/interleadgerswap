import React from "react";
import { navLinks, socialLinks } from "../data/data";
import NavLinkItem from "./NavLinkItem";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <>
      {navLinks.map((navLink) => (
        <NavLinkItem navLink={navLink} key={navLink.link} />
      ))}
    </>
  );
};

export default NavLinks;
