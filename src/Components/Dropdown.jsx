import React from "react";
import styles from "./Dropdown.module.css";
import { NavLink } from "react-router-dom";
import { whitepaper } from "../assests";

const Dropdown = ({ onClose }) => {
  return (
    <ul className={styles.container} onClick={onClose}>
      <li >
        <NavLink to="/termofuse" className={styles.link}>
          Terms of Use
        </NavLink>
      </li>
      <li>
        <a href={whitepaper} target="blank" className={styles.link}>
          Whitepaper
        </a>
      </li>
      <li>
        <NavLink to="/faqs" className={styles.link} >
          FAQS
        </NavLink>
      </li>
    </ul>
  );
};

export default Dropdown;
