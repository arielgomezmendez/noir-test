import { Button, TextField, InputAdornment } from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <>
      <form className={styles.registerForm}>
        <h1>Regístrate</h1>

        <h4>Primer nombre</h4>
        <TextField
          id="outlined-basic"
          placeholder="PlaceHolder"
          variant="outlined"
          className={styles.input}
        />

        <h4>Segundo nombre</h4>
        <TextField
          id="outlined-basic"
          placeholder="PlaceHolder"
          variant="outlined"
          className={styles.input}
        />

        <h4>Correo electrónico</h4>
        <TextField
          className={styles.input}
          placeholder="PlaceHolder"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
        />

        <h4>Número de teléfono</h4>
        <TextField
          className={styles.input}
          placeholder="+1 768 482 6489 4556"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />

        <h4>Nombre de la agencia</h4>
        <TextField
          className={styles.input}
          id="outlined-basic"
          placeholder="PlaceHolder"
          variant="outlined"
        />

        <Button variant="contained" className={styles.button}>
          Continuar
        </Button>

        <p>
          Al hacer clic en "Continuar" arriba, usted reconoce
          <br />
          que ha leído y entendido, y acepta los Términos y
          <br /> condiciones y la Política de Privacidad de Notir.
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
