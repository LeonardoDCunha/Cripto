import style from "/.style.module.css";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className={style.container}>
      <h1>Pagina 404 nao existe</h1>
      <Link to="/">Acessar cripto moedas</Link>
    </div>
  );
}
