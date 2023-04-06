import React from "react";
import Button from "./Button";
import Header from "./Header";

const App = () => {
  const [contar, setContar] = React.useState(0);

  function handleClick() {
    setContar(contar + 1);
  }

  return (
    <div>
      <Header />
      <Button onClick={handleClick} margin="20px" width={240}>
        {contar}
      </Button>
    </div>
  );
};

export default App;
