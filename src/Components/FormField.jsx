import React from "react";
import styles from "./FormComponent.module.css";

const FormField = ({ label, labelId, selectName }) => {
  return (
    <div className="flex w-full relative">
      <label for={labelId} className={styles["form-label"]}>
        {label}
      </label>
      <input id={labelId} className={styles["form-input"]} />
      <select name={selectName} className={styles["form-select"]}>
        <option value="BTC">
        
          <span> BTC</span>
        </option>
        <option value="TRON">
         
          USDT
        </option>
      </select>
    </div>
  );
};

export default FormField;