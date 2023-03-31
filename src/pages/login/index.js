import LoginForm from "@/components/LoginForm/LoginForm";
import NoirImage from "@/components/NoirImage/NoirImage";
import { Container } from "@mui/system";
//import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.css";

const index = () => {
  return (
    <>
      <Container className={styles.loginPage}>
        <NoirImage />
        <LoginForm />
      </Container>
    </>
  );
};

export default index;

/*

 const route = useRouter();
<button
        onClick={() => {
          route.push("/");
        }}
      >
        route
      </button>
*/
