import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const ProdutoContext = () => {
  const { dados, limparDados } = useContext(GlobalContext);

  if (dados === null) return null;
  return (
    <div>
      Produto: {""}
      {dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
      <button onClick={limparDados}>Limpar</button>
    </div>
  );
};

export default ProdutoContext;
