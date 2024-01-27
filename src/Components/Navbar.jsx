import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { logo, toggle, close } from "../assests";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Navbar2 from "./Navbar2";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const [dropDown, setDropdown] = useState(false);

  const toggleHandler = () => {
    setToggleButton((prev) => !prev);
  };

  const dropDownHandler = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <header className={`${styles.header}`}>
      <div
        className={`${toggleButton && styles.overlay}`}
        onClick={toggleHandler}
      ></div>
      <Navbar2 />
      <nav className={`${styles.navContainer}`}>
        <div className={styles.logoSection}>
          <NavLink to="/">
            <img src={logo} />
          </NavLink>
          <h2 className={`${styles.logoText} text-[#6450E0] font-bold`}>
            INTERLEDGERSWAP
          </h2>
        </div>

        <ul className={`${styles.navMenu} ${toggleButton && styles.showMenu}`}>
          {/********************* Menu close button *******************/}

          <img
            src={close}
            className={styles.closeBtn}
            onClick={toggleHandler}
          />

          <button className={styles.mobileBtn}>Start Now</button>

          {/********************* Menu Lists *******************/}
          <li className={styles.navItems} onClick={toggleHandler}>
            <NavLink to="/" className={`${styles.link}`}>
              Home
            </NavLink>
          </li>

          <li className={styles.navItems}>
            <p
              className={`${styles.link} cursor-pointer inline`}
              onClick={dropDownHandler}
              onMouseEnter={dropDownHandler}
            >
              Resources
            </p>
          </li>
          {dropDown && <Dropdown onClose={toggleHandler} />}

          <li className={styles.navItems} onClick={toggleHandler}>
            <a
              href="https://videos.files.wordpress.com/o0s7TlDp/interledgerswap-xls-project-1.mp4"
              target="blank"
              className={`${styles.link}`}
            >
              About Us
            </a>
          </li>
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
