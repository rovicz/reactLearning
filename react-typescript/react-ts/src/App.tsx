import React from "react";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [total, setTotal] = React.useState(0);

  function add() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button onClick={add}>Adicionar</Button>
      <Input id="email" label="Email" type="email" />
      <Input id="nome" label="Nome" />
      <Input id="inicio" label="Inicio da Viagem" type="date" />
      <Input id="horario" label="Horário" type="time" />
    </div>
  );
}

export default App;
