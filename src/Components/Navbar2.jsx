import React from "react";
import SocialLinks from "./SocialLinks";
import styles from "./Navbar2.module.css";
import Skeleton from "react-loading-skeleton";

const Navbar2 = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.socialLinksContainer}`}>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Navbar2;
