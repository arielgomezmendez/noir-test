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
import Link from "next/link";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //States to able and disable the button
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //Get the user name
  const handleUserName = (event) => {
    if (event && event.target) {
      setUserName(event.target.value);
      console.log(userName);
    }
  };
  //Get the password
  const handlePassword = (event) => {
    if (event && event.target) {
      setPassword(event.target.value);
    }
  };

  const route = useRouter();

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
            onChange={handleUserName}
          />
          <h4>Contraseña</h4>
          {/* FormControl componet from MUI for create a password field and a button show and hide the password */}
          <FormControl
            className={styles.input}
            variant="outlined"
            onClick={(event) => setPassword(event.target.value)}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Introduce la contraseña
            </InputLabel>
            {/* OutlinedInput componet from MUI to create a field of passowrd */}
            <OutlinedInput
              onChange={handlePassword}
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
            // able the login button when the input values are not empty
            disabled={userName && password ? false : true}
            className={styles.button}
            onClick={() => {
              route.push("/");
            }}
          >
            Iniciar sesión
          </Button>
        </form>
      </Container>
    </>
  );
};

export default LoginForm;
