import React from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/sobre");
  }

  return (
    <div>
      <Helmet>
        <title>Página Login</title>
        <meta name="description" content="Esta é a Página Login do Website." />
      </Helmet>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
