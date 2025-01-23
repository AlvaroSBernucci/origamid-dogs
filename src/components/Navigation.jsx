import { NavLink } from "react-router-dom";
import { ReactComponent as Dogs } from "../assets/dogs.svg";
import styles from "./Navigation.module.css";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

function Navigation() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink className={styles.logo} to="/">
          <Dogs />
        </NavLink>
        {data && data.email ? (
          <NavLink className={styles.login} to="/login">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </NavLink>
        ) : (
          <NavLink className={styles.login} to="/login">
            Login / Cadastro
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
