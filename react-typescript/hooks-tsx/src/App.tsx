import React from "react";
import Button from "./Button";

function user() {
  return {
    nome: "Victor",
    profissao: "Desenvolvedor",
  };
}

type User = {
  nome: string;
  profissao: string;
};

function App() {
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      {data !== null && (
        <div>
          <p>Nome: {data.nome}</p>
          <p>Profissão: {data.profissao}</p>
          <div>
            <p>Total : {total}</p>
            <Button incrementar={setTotal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
