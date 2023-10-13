import React from "react";
import { useUser } from "./UiContextAtv";

const ContentAtv = () => {
  const { data, loading } = useUser();
  if (loading) return <div>Carregando...</div>;
  if (!data) return null;
  return (
    <ul>
      <h3>Preferências: </h3>
      <li>ID: {data.id}</li>
      <li>Nome: {data.nome}</li>
      <li>Idade: {data.idade}</li>
      <li>Aulas: {data.aulas}</li>
      <li>Cursos: {data.cursos}</li>
    </ul>
  );
};

export default ContentAtv;
