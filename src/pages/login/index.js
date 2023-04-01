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
        <Image src="/Looper2.png" alt="Looper 2" width={200} height={200} />
        <NoirImage />
        <LoginForm />
        <Image src="/Looper-2-1.png" alt="Looper 2" width={200} height={200} />
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
