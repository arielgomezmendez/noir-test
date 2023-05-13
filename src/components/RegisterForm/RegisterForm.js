import { Button, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./RegisterForm.module.css";
import * as Yup from "yup"; // import library to validate form

const RegisterForm = ({ setStep }) => {
  //create the validation schema
  const registrationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    secondName: Yup.string().required(),
    email: Yup.string().email().required(),
    phoneNumber: Yup.string().required(),
    agencyName: Yup.string().required(),
  });

  // local state for form values and validation errors
  //formValues is an object containing the values of the form fields.
  const [formValues, setFormValues] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phoneNumber: "",
    agencyName: "",
  });
  //formErrors is an object containing the validation errors corresponding to each field.
  const [formErrors, setFormErrors] = useState({});

  // function used as an event handler to update the formValues state when a user enters or changes the values of the form fields.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // this state is updated making a copy of formValues object
    // using the three points operators to create a new object with the updated property
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //registrationSchema.validate is used to validate the form values using the registrationSchema validation scheme.
  //If there are validation errors, they are captured and updated in the formErrors state.

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await registrationSchema.validate(formValues, { abortEarly: false }); //The { abortEarly: false } argument is passed so that Yup generates all validation errors
      // instead of stopping after the first error encountered.
      setFormErrors({});
      setStep(2);
    } catch (error) {
      // errors is an empty object to store the validation errors
      const errors = {};
      //inner is a property of error object, is used for access to the internal errors of a validation
      error.inner.forEach((err) => {
        errors[err.path] = err.message; //err.path get the path of the field associated with the error
        //err.message get the message error
      });
      setFormErrors(errors);
    }
  };

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
          name="firstName"
          onChange={(event) => handleInputChange(event)}
        />

        <h4>Segundo nombre</h4>
        <TextField
          id="outlined-basic"
          placeholder="PlaceHolder"
          variant="outlined"
          className={styles.input}
          name="secondName"
          onChange={(event) => handleInputChange(event)}
        />

        <h4>Correo electrónico</h4>
        <TextField
          className={styles.input}
          placeholder="PlaceHolder"
          id="outlined-start-adornment"
          name="email"
          onChange={(event) => handleInputChange(event)}
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
          name="phoneNumber"
          onChange={(event) => handleInputChange(event)}
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
          name="agencyName"
          onChange={(event) => handleInputChange(event)}
        />

        <Button
          variant="contained"
          className={styles.button}
          onClick={(event) => handleSubmit(event)}
        >
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
