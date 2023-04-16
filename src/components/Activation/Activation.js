import React from "react";
import styles from "./Activation.module.css";
import { Button, Container, TextField } from "@mui/material";

const Activation = ({ setStep }) => {
  return (
    <>
      <Container className={styles.activation}>
        <h1>Activación</h1>
        <p className={styles.p1}>Hemos enviado un código de activación a:</p>
        <p className={styles.p2}>correo@correo.com</p>
        <Container className={styles.inputsContainer}>
          <TextField className={styles.input} />
          <TextField className={styles.input} />
          <TextField className={styles.input} />
          <TextField className={styles.input} />
        </Container>
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => setStep(3)}
        >
          Verificar
        </Button>
      </Container>
    </>
  );
};

export default Activation;
