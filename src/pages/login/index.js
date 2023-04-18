import LoginForm from "@/components/LoginForm/LoginForm";
import NotirImage from "@/components/NotirImage/NotirImage";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div className={styles.loginPageContainer}>
      <Container className={styles.loginPage}>
        {/*Left  side of the page*/}
        <Container className={styles.leftSide}>
          <Image
            className={styles.star1}
            src="/Looper-2-1.png"
            alt="Looper 1"
            width={500}
            height={500}
          />
          <h1>Bienvenido a </h1>
          <Image
            src="/Notir.png"
            width={180}
            height={180}
            alt="Notir"
            className={styles.notirLogo}
          />
          <NotirImage className={styles.notirImageLogin} />
        </Container>

        {/*Riht  side of the page*/}
        <Container className={styles.rightSide}>
          <LoginForm />
          <Image
            className={styles.star2}
            src="/Looper2.png"
            alt="Looper 1"
            width={500}
            height={500}
          />
        </Container>
      </Container>
    </div>
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
