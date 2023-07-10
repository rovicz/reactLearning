import { useParams } from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import { ProdutoAvaliacao } from "./ProdutoAvaliacao";
import { NavLink, Routes, Route } from "react-router-dom";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produtos</h1>
      <p>Produto (ID): {params.id}</p>
      <nav>
        <NavLink to="">Descrição</NavLink> |{" "}
        <NavLink to="avaliacao">Avaliação</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
      </Routes>
    </div>
  );
};

export default Produto;
