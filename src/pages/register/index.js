import NoirImage from "@/components/NotirImage/NotirImage";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { Container } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <div>
      <Container>
        <NoirImage />
        <RegisterForm />
      </Container>
    </div>
  );
};

export default index;
