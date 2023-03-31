import LoginForm from "@/components/LoginForm/LoginForm";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
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
