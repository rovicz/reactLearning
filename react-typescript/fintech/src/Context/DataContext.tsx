import React from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
};

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "falha" | "pago" | "procesando";
  pagamento: "cartao" | "pix" | "boleto";
  parcelas: number;
  data: string;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);

  if (!context)
    throw new Error("useData precisa estar em DataContextProvider.");

  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(
    "data.origamid.dev/vendas/",
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error }}
    ></DataContext.Provider>
  );
};
