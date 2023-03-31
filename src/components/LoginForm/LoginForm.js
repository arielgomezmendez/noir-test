import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
//Import CSS how CSS componet level, to apply the styles just to LoginForm component using CSS modules
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <>
      <Container className={styles.loginContainer}>
        <h2>Bienvenido a Noir</h2>
        <span>Acceda a su cuenta</span>

        <form>
          <h4>Usuario o correo electrónico</h4>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <h4>Contraseña</h4>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <h3>¿Olvidaste tu contraseña?</h3>
          <Button variant="contained" disableElevation>
            Iniciar seción
          </Button>
        </form>
      </Container>
    </>
  );
};

export default LoginForm;
