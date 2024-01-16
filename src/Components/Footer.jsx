import React from "react";
import styles from "./Footer.module.css";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { footerSocials } from "../data/data";
import { logo } from "../assests";
const Footer = () => {
  return (
    <footer className="pt-[5rem] bg-[#E6EAF1] px-[0.5rem]">
      <div className={`${styles.navContainer}`}>
        <div className={styles.logoSection}>
          <img src={logo} />
          <h2 className={`${styles.logoText} text-[#6450E0] font-bold`}>
            INTERLEDGERSWAP
          </h2>
        </div>

        <ul className={`${styles.navMenu}`}>
          <NavLinks />
          <button className={styles.closeBtn}>button</button>
        </ul>

        <div className={`styles.socialImages flex gap-[0.1rem]`}>
          {footerSocials.map((footerSocial) => (
            <div>
              <img src={footerSocial.image} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.hr}></div>

      <p className="text-center pb-[1rem]">Copyright © 2024 INTERLEDGERSWAP</p>
    </footer>
  );
};

export default Footer;
