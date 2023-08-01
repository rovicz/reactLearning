import React from "react";

const UseFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let r;
    let json;

    try {
      setError(null);
      setLoading(true);
      r = await fetch(url, options);
      json = await r.json();
      if (r.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { r, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default UseFetch;
