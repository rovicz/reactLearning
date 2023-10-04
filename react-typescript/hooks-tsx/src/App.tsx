import React from "react";
import Button from "./Button";
import Input from "./Input";

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
};

function App() {
  // Uso de useState.

  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  const [data, setData] = React.useState<null | Venda[]>(null);

  React.useEffect(() => {
    if (inicio !== "" && final !== "") {
      fetch(`https://data.origamid.dev/vendas/?${inicio}&final${final}`).then(
        (r) =>
          r
            .json()
            .then((json) => setData(json as Venda[]))
            .catch((error) => console.log(error))
      );
    }
  }, [inicio, final]);

  React.useEffect(() => {
    console.log("useEffect sendo aplicado.");
    return () => {
      console.log("Função sendo montada dentro do useEffect.");
    };
  }, []);
  // o useEffect sempre retorna outra função e somente OUTRA FUNÇÃO.

  // Exemplo 2:

  function useEffectExample() {
    console.log("useEffect - Exemplo 2");
    return () => {
      console.log("Função sendo montada dentro do useEffect - Exemplo 2.");
    };
  }

  React.useEffect(useEffectExample, []);

  return (
    <div>
      <div>
        <Input label="Início" type="date" setState={setInicio} value={inicio} />
        <Input label="Final" type="date" setState={setFinal} value={final} />
      </div>
      <ul>
        {data !== null &&
          data.map((venda) => (
            <li key={venda.id}>
              {venda.nome}: {venda.status}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
