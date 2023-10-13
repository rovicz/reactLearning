import React from "react";
import { useUser } from "./UiContextAtv";

const HeaderAtv = () => {
  const { data } = useUser();

  if (!data) return null;
  return <h1>{data.nome}</h1>;
};

export default HeaderAtv;
