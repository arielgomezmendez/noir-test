import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
//Import CSS how CSS componet level, to apply the styles just to LoginForm component using CSS modules
import styles from "./LoginForm.module.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Container className={styles.loginContainer}>
        <h2>Bienvenido a Noir</h2>
        <span>Acceda a su cuenta</span>

        <form>
          <h4>Usuario o correo electrónico</h4>
          <TextField
            id="outlined-basic"
            label="ejemplo@email.com"
            variant="outlined"
            className={styles.input}
          />
          <h4>Contraseña</h4>
          {/* FormControl componet from MUI for create a password field and a button show and hide the password */}
          <FormControl className={styles.input} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Introduce la contraseña
            </InputLabel>
            {/* OutlinedInput componet from MUI to create a field of passowrd */}
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                /* InputAdornment componet from MUI to create a button sho show and hide the password */
                <InputAdornment position="end">
                  <IconButton
                    className={styles.eye}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <h3>¿Olvidaste tu contraseña?</h3>
          <Button
            variant="contained"
            disableElevation
            className={styles.button}
          >
            Iniciar seción
          </Button>
        </form>
      </Container>
    </>
  );
};

export default LoginForm;

{
  /*
<TextField
            id="outlined-basic"
            label="Introduce tu contraseña"
            variant="outlined"
            className={styles.input}
            type="pasword"
          />

*/
}
