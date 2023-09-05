import React from "react";

type ButtonPropsIT = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const ButtonIT = ({ total, setTotal }: ButtonPropsIT) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Adicionar: {total}</button>
  );
};

export default ButtonIT;
