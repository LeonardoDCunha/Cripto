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
  const [resultData, setResultData] = useState<CoinProps | null>(null);

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

        const formatedData = {
          ...data,
          formatedPrice: price.format(Number(data.price)),
          formatedMarket: price.format(Number(data.market_cap)),
          formatedLowprice: price.format(Number(data.low_24h)),
          formatedHighprice: price.format(Number(data.high_24h)),
        };

        setResultData(formatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResultData(null); // Defina um valor padrão para resultData em caso de erro
      }
    }

    getData();
  }, [cripto]);

  if (!resultData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pagina Detalhes {cripto}</h1>
      <p>Preço: {resultData.formatedPrice}</p>
      <p>Market Cap: {resultData.formatedMarket}</p>
      <p>Menor preço nas últimas 24h: {resultData.formatedLowprice}</p>
      <p>Maior preço nas últimas 24h: {resultData.formatedHighprice}</p>
    </div>
  );
}
