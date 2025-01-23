import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { ReactComponent as Usuario } from "../../assets/usuario.svg";
import { ReactComponent as Estatisticas } from "../../assets/estatisticas.svg";
import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import styles from "./UserNavHeader.module.css";

function UserNavHeader() {
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <Usuario />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
      </NavLink>
      <NavLink to="/conta/postar">
        <Enviar />
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
      </button>
    </nav>
  );
}

export default UserNavHeader;
