import React from "react";
import useFetch from "./useFetch";

type IUserContext = {
  data: User | null;
  loading: boolean;
};

type User = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null)
    throw new Error("useContext deve estar dentro do Provider.");
  return context;
};

export const UiContextProviderAtv = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<User>(
    "https://data.origamid.dev/usuarios/1",
  );

  return (
    <UserContext.Provider value={{ data, loading }}>
      {children}
    </UserContext.Provider>
  );
};
