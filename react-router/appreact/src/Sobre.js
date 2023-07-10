import React from "react";
import Helmet from "react-helmet";

const Sobre = () => {
  return (
    <div>
      <Helmet>
        <title>Página Sobre</title>
        <meta name="description" content="Esta é a Página Sobre do Website." />
      </Helmet>
      <h1>Sobre</h1>
      <p>Essa é a Sobre.</p>
    </div>
  );
};

export default Sobre;
