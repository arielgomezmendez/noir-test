import NoirImage from "@/components/NotirImage/NotirImage";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { Container } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import Activation from "@/components/Activation/Activation";
import Finish from "@/components/Finish/Finish";

const index = () => {
  const [step, setStep] = useState(1);
  return (
    <div className={styles.registerPageContainer}>
      <Container className={styles.registerPage}>
        <NoirImage className={styles.notirImageRegister} />
        {step === 1 ? (
          <RegisterForm step={step} setStep={setStep} />
        ) : step === 2 ? (
          <Activation setStep={setStep} />
        ) : (
          step === 3 && <Finish setStep={setStep} step={step} />
        )}
      </Container>
    </div>
  );
};

export default index;
