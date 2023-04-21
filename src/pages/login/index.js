import LoginForm from "@/components/LoginForm/LoginForm";
import NotirImage from "@/components/NotirImage/NotirImage";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import star1 from "../../../public/Looper-2-1.png";
import star2 from "../../../public/Looper2.png";
import notirLogo from "../../../public/Notir.png";

const index = () => {
  return (
    <div className={styles.loginPageContainer}>
      {/*Left  side of the page*/}
      <Container className={styles.leftSide}>
        <Image className={styles.star1} src={star1} alt="Looper 1" />

        <h1>Bienvenido a </h1>

        <Image src={notirLogo} alt="Notir" className={styles.notirLogo} />
        <NotirImage className={styles.notirImageLogin} />
      </Container>

      {/*Riht  side of the page*/}
      <Container className={styles.rightSide}>
        <LoginForm />
        <Image className={styles.star2} src={star2} alt="Looper 2" />
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
