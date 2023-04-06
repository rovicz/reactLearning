import { useParams } from "react-router-dom";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produtos</h1>
      <p>Produto (ID): {params.id}</p>
    </div>
  );
};

export default Produto;
