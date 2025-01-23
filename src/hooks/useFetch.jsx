import { useCallback } from "react";
import { useState } from "react";

function useFetch() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const request = useCallback(async (url, options) => {
    let response;
    let resJson;
    try {
      setLoading(true);
      setError(null);
      response = await fetch(url, options);
      resJson = await response.json();
      if (response.ok === false) throw new Error(resJson.message);
    } catch (error) {
      resJson = null;
      setError(error.message);
    } finally {
      setData(resJson);
      setLoading(false);
      return { response, resJson };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
}

export default useFetch;
