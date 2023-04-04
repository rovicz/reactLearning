import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let r;
    let json;
    try {
      setErro(null);
      setLoading(true);
      const r = await fetch(url, options);
      const json = await r.json();
    } catch (erro) {
      json = null;
      setErro("Houve um erro ao acessar a API.");
    } finally {
      setData(json);
      setLoading(false);
      return { r, json };
    }
  }, []);

  return { data, erro, loading, request };
};

export default useFetch;
