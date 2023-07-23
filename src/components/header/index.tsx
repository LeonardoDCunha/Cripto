import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/logo.svg";
import logoString from "../../assets/logoString.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <div>
        s
        <Link to="/">
          <div>
            <img className={styles.logo} src={logo} alt="Logo Cripto" />
            <img
              className={styles.logoString}
              src={logoString}
              alt="Logo String"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
