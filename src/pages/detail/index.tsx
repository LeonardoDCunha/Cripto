import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import { useParams } from "react-router-dom";

interface CoinProps {
  symbol: string;
  name: string;
  price: string;
  market_cap: string;
  low_24h: string;
  high_24h: string;
  total_volume_24h: string;
  delta_24h: string;
  formatedPrice: string;
  formatedMarket: string;
  formatedLowprice: string;
  formatedHighprice: string;
  error?: string;
}

export function Detail() {
  const { cripto } = useParams();
  const [detail, setDetail] = useState<CoinProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://sujeitoprogramador.com/api-cripto/coin/?key=9b74f336bee213f4&symbol=${cripto}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const price = Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const resultData = {
          ...data,
          formatedPrice: price.format(Number(data.price)),
          formatedMarket: price.format(Number(data.market_cap)),
          formatedLowprice: price.format(Number(data.low_24h)),
          formatedHighprice: price.format(Number(data.high_24h)),
        };

        setDetail(resultData);
        setLoading(false);
      } catch (error) {
        console.error("Error ao processar arquivos:", error);
        setDetail(null);
      }
    }

    getData();
  }, [cripto]);

  if (loading) {
    return (
      <div className={styles.container}>
        <h4 className={styles.center}> Carregando Informações . . .</h4>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>{detail?.name}</h1>
      <p className={styles.center}>{detail?.symbol}</p>

      <section className={styles.content}>
        <p>
          <strong>Preço: </strong>
          {detail?.formatedPrice}
        </p>
        <p>
          <strong>Maior preço nas últimas 24h: </strong>
          {detail?.formatedHighprice}
        </p>
        <p>
          <strong>Menor preço nas últimas 24h: </strong>
          {detail?.formatedLowprice}
        </p>
        <p>
          <strong>Delta 24h: </strong>
          <span
            className={
              Number(detail?.delta_24h) >= 0 ? styles.profit : styles.loss
            }
          >
            {detail?.delta_24h}
          </span>
        </p>
        <p>
          <strong>Valor Mercado: </strong>
          {detail?.formatedMarket}
        </p>
      </section>
    </div>
  );
}
