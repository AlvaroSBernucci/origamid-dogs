import { useLocation } from "react-router-dom";
import UserNavHeader from "./UserNavHeader";
import { useEffect, useState } from "react";
import styles from "./UserHeader.module.css";

function UserHeader() {
  const { pathname } = useLocation();
  const [title, setTitle] = useState();

  useEffect(() => {
    switch (pathname) {
      case "/conta":
        setTitle("Minha conta");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Postar");
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <nav className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserNavHeader />
    </nav>
  );
}

export default UserHeader;
