import React, { useState, useEffect } from "react";
import styles from "./ResourceItem.module.css";
import parse from "html-react-parser";

const ResourceItem = ({ num, curr, onOpen, resource, plus }) => {
  const isOpen = num === curr;
  const openHandler = () => {
    onOpen(isOpen ? null : num);
  };

  const [loading, setLoading] = useState();

  useEffect(function () {
    async function fetch() {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setLoading(false);
    }

    fetch();
  }, []);

  return (
    <div className={`${styles.container} `} onClick={openHandler}>
      <div
        className={`${styles.titleContent} ${
          isOpen && styles.titleContentRemove
        }`}
      >
        <h4 className={`${styles.title}`}>{resource.questions}</h4>
        <img src={plus} className={`cursor-pointer`} onClick={openHandler} />
      </div>

      <div className={`${styles.text} ${isOpen && styles.showText}`}>
        <p> {parse(resource.answers)}</p>
      </div>
    </div>
  );
};

export default ResourceItem;
