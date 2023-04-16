import NoirImage from "@/components/NotirImage/NotirImage";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { Container } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import Activation from "@/components/Activation/Activation";

const index = () => {
  const [step, setStep] = useState(1);
  return (
    <div className={styles.registerPageContainer}>
      <Container className={styles.registerPage}>
        <NoirImage className={styles.notirImageRegister} />
        {step === 1 ? (
          <RegisterForm step={step} setStep={setStep} />
        ) : (
          <Activation />
        )}
      </Container>
    </div>
  );
};

export default index;
