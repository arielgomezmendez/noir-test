import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <Container>
        <h2>Bienvenido a Noir</h2>
        <span>Acceda a su cuenta</span>
        <form>
          <h3>Usuario o correo electrónico</h3>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <h3>Contraseña</h3>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </Container>
    </>
  );
};

export default LoginForm;
