import styles from "./detail.module.css";
import { useParams } from "react-router-dom";

export function Detail() {
  const { cripto } = useParams();

  return (
    <div>
      <h1>Pagina Detalhes{cripto}</h1>
    </div>
  );
}
