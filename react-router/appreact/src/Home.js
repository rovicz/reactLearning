import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Página Home</title>
        <meta name="description" content="Esta é a Página Home do Website." />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a Home.</p>
      <Link to="produto/notebook">Notebook</Link> |{" "}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
