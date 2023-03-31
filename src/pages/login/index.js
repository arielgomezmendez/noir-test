import LoginForm from "@/components/LoginForm/LoginForm";
import NoirImage from "@/components/NoirImage/NoirImage";
import { Container } from "@mui/system";
//import { useRouter } from "next/router";
import React from "react";

const index = () => {
  return (
    <>
      <h1>Login</h1>
      <Container>
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
