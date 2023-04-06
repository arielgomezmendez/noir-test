import LoginForm from "@/components/LoginForm/LoginForm";
import NoirImage from "@/components/NoirImage/NoirImage";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div className={styles.loginPageContainer}>
      <Container className={styles.loginPage}>
        <Image
          className={styles.star1}
          src="/Looper-2-1.png"
          alt="Looper 1"
          width={500}
          height={500}
        />
        <NoirImage />
        <LoginForm />
        <Image
          className={styles.star2}
          src="/Looper2.png"
          alt="Looper 1"
          width={500}
          height={500}
        />
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
