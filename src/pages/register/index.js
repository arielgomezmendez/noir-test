import NoirImage from "@/components/NotirImage/NotirImage";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { Container } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div>
      <Container className={styles.registerPage}>
        <NoirImage className={styles.notirImageRegister} />
        <RegisterForm />
      </Container>
    </div>
  );
};

export default index;
