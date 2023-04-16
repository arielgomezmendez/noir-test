import React from "react";
import styles from "./Activation.module.css";
import { Button, Container, TextField } from "@mui/material";

const Activation = () => {
  return (
    <>
      <Container className={styles.activation}>
        <h1>Activacion</h1>
        <p>Hemos enviado un código de activación a:</p>
        <p>correo@correo.com</p>
        <Container className={styles.inputsContainer}>
          <TextField className={styles.input} />
          <TextField className={styles.input} />
          <TextField className={styles.input} />
          <TextField className={styles.input} />
        </Container>
        <Button variant="contained" className={styles.button}>
          Verificar
        </Button>
      </Container>
    </>
  );
};

export default Activation;
