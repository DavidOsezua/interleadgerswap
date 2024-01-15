import React from "react";
import Button from "./Button";
import { arrow } from "../assests";
import styles from "./SectionComponent.module.css";

const SectionComponent = ({
  image,
  images,
  heading1,
  heading2,
  heading3,
  text1,
  text2,
  text3,
  center,
  imageSide,
}) => {
  return (
    <div className={styles.split}>
      <div className={`${imageSide ? styles.imageSide : ""}`}>
        <img src={image} />
      </div>

      <div
        className={`${styles.splitContainer} ${
          center === true ? styles.textCenter : " "
        } `}
      >
        <div className={``}>
          <h1 className={styles.heading}>{heading1} </h1>
          <p className={styles.text}>{text1}</p>
        </div>

        <div>
          <h1 className={styles.heading}>{heading2}</h1>
          <p className={styles.text}>{text2}</p>
        </div>

        <div>
          <h1 className={styles.heading}>{heading3}</h1>
          <p className={styles.text}>{text3}</p>
        </div>

        <div>{images}</div>

        <Button>
          <img src={arrow} /> Start Now
        </Button>
      </div>
    </div>
  );
};

export default SectionComponent;
