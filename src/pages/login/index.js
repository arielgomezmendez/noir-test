import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const index = () => {
  const [state, setState] = useState();
  const route = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          route.push("/");
        }}
      >
        route
      </button>
    </div>
  );
};

export default index;
