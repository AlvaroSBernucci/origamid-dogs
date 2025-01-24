import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { ReactComponent as Usuario } from "../../assets/usuario.svg";
import { ReactComponent as Estatisticas } from "../../assets/estatisticas.svg";
import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import styles from "./UserNavHeader.module.css";
import useMedia from "../../hooks/useMedia";

function UserNavHeader() {
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia("(max-width: 40rem)");

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button onClick={() => setMobileMenu(!mobileMenu)} className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <Usuario />
          {mobile && "Minha conta"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <Enviar />
          {mobile && "Postar"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}

export default UserNavHeader;
