/* eslint-disable react/prop-types */
import React from "react";
import styles from "./FormModal.module.css";
import { formClose, arrow } from "../assests";
import useMultistepForm from "../customHooks/useMultistepForm";
import EnterExchange from "./EnterExchange";
import ConfirmExcahnge from "./ConfirmExcahnge";
import CompleteExchange from "./CompleteExchange";

const FormModal = ({ modalHandler }) => {
  const { currentStep, next, step } = useMultistepForm([
    <EnterExchange key={0} />,
    <ConfirmExcahnge key={1} />,
    <CompleteExchange key={2} />,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    next();
  };

  return (
    <div className={`${styles.overlay}`}>
      <div className={`${styles.overlay2}`} onClick={modalHandler}></div>
      <div className={`${styles.formContainer}`}>
        <form onSubmit={submitHandler}>
          <div className={`${styles.formWrapper}`}>
            <div className={`${styles.formHeader}`}>
              <div className="flex justify-center w-full">
                <p className={`${styles.formText}`}>
                  {currentStep > 0
                    ? "Please confirm the details of your exchange"
                    : "Please enter the details of your exchange"}
                </p>
              </div>

              <div>
                <img
                  src={formClose}
                  onClick={modalHandler}
                  className="cursor-pointer w-[20px]"
                />
              </div>
            </div>

            <div>Progress bar</div>

            {step}

            <button className={`${styles.formButton} cursor-pointer`}>
              Next
              <img src={arrow} />
            </button>
            {/* */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
