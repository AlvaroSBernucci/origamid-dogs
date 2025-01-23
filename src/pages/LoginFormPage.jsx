import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Forms/Button";
import Input from "../components/Forms/Input";
import useForm from "../hooks/useForm";
import UserContext from "../contexts/UserContext";
import styles from "./LoginForm.module.css";
import stylesBtn from "../components/Forms/Button.module.css";

function LoginFormPage() {
  const password = useForm();
  const username = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const { userLogin, error, loading, login } = useContext(UserContext);
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={`${styles.login} animeLeft`}>
      <div className={styles.forms}>
        <h1 className="title">Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
          {error && <p>{error}</p>}
        </form>
        <Link className={styles.perdeu} to="/login/perdeu">
          Perdeu a Senha?
        </Link>
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className={stylesBtn.button} to="/cadastro">
            Cadastro
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginFormPage;
