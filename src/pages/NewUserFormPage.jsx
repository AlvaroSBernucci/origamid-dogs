import { useContext, useState } from "react";
import Button from "../components/Forms/Button.jsx";
import Input from "../components/Forms/Input.jsx";
import useForm from "../hooks/useForm.jsx";
import { CREATE_USER_POST } from "../api/api.jsx";
import UserContext from "../contexts/UserContext.jsx";
import useFetch from "../hooks/useFetch.jsx";
import Error from "../components/helper/Error.jsx";

function NewUserFormPage() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const { userLogin } = useContext(UserContext);
  const { request, loading, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    userCreate();
  }

  async function userCreate() {
    const { url, options } = await CREATE_USER_POST({ username: username.value, email: email.value, password: password.value });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  );
}

export default NewUserFormPage;
