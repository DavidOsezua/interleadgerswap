import React, { useState } from "react";
import { plus } from "../assests";
import styles from "./Resource.module.css";
import ResourceItem from "./ResourceItem";

const Resource = ({ Sectiondata }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  const [curr, setIsOpen] = useState(null);

  return (
    <div className={styles.sectionContainer}>
      <ul className={styles.faqContainer}>
        {Sectiondata.map((resource, i) => (
          <ResourceItem
            key={i}
            resource={resource}
            num={i}
            curr={curr}
            plus={plus}
            onOpen={setIsOpen}
            onToggle={toggleHandler}
            toggle={toggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default Resource;
