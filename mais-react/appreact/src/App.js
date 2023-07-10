import React from "react";
import Button from "./Button";
import Header from "./Header";

function reducer(state, action) {
  switch (action) {
    case "aumentar":
      return state + 1;
    case "reduzir":
      return state - 1;
    default:
      throw new Error();
  }
}

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [state, dispatch] = React.useReducer(reducer, 0);

  function handleClick() {
    setContar(contar + 1);
  }

  return (
    <div>
      <Header />
      <Button onClick={handleClick} margin="20px" width={240}>
        {contar}
      </Button>

      <button onClick={() => dispatch("aumentar")}>+</button>
      <button onClick={() => dispatch("diminuir")}>-</button>
      <p>{state}</p>
    </div>
  );
};

export default App;
