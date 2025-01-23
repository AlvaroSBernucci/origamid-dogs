import { useState, createContext, useEffect } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../api/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [login, setLogin] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setLoading(true);
          setError(null);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data);
    setLogin(true);
    setLoading(false);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username: username, password: password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Usuário ou senha inválidos`);
      const data = await response.json();
      localStorage.setItem("token", data.token);
      await getUser(data.token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setError(null);
    setData(null);
    setLogin(false);
    setLoading(false);
    localStorage.removeItem("token");
    navigate("/login");
  }

  return <UserContext.Provider value={{ userLogin, data, error, userLogout, login, loading }}>{children}</UserContext.Provider>;
};

export default UserContext;
