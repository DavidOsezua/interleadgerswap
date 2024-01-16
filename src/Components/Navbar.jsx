import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { logo, toggle } from "../assests";
import Button from "./Button";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const toggleHandler = () => {
    setToggleButton((prev) => !prev);
  };
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.navContainer}`}>
        <div className={styles.logoSection}>
          <NavLink to="/">
            <img src={logo} />
          </NavLink>
          <h2 className={`${styles.logoText} text-[#6450E0] font-bold`}>
            INTERLEDGERSWAP
          </h2>
        </div>

        <ul
          className={`${styles.navMenu} ${toggleButton ? styles.showMenu : ""}`}
          onClick={toggleHandler}
        >
          <NavLinks onClose={toggleHandler} />
          <div>
            <button className={styles.closeBtn}>
              Close
            </button>
          </div>
        </ul>

        <div className={styles.toggleBtn}>
          <Button>Start Now</Button>
          <div className={styles.toggle}>
            <img src={toggle} onClick={toggleHandler} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
