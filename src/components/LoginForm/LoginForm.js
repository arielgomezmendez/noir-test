import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <Container>
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
