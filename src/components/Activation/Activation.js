import React from "react";
import styles from "./Activation.module.css";
import { Button, Container, TextField } from "@mui/material";

const Activation = () => {
  return (
    <>
      <Container className={styles.activation}>
        <h1>Activacion</h1>
        <Container>
          <TextField className={styles.input} />
          <TextField className={styles.input} />
          <TextField className={styles.input} />
          <TextField className={styles.input} />
        </Container>
        <p>Hemos enviado un código de activación a:</p>
        <p>correo@correo.com</p>
        <Button variant="contained">Verificar</Button>
      </Container>
    </>
  );
};

export default Activation;
