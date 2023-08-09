import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import styles from "./loading.module.css";

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um tempo de carregamento
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2500); // Tempo em milissegundos (aqui definido para 2 segundos e meio)

    // Limpa o timeout quando o componente é desmontado
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div
      id="loading"
      className={`${styles.loadingOverlay} ${styles.centralize}`}
    >
      <ClipLoader color="#38b6ff" size={35} />
    </div>
  );
};
export default Loading;
