import { FormEvent, useEffect, useState } from "react";
import styles from "./home.module.css";
import { FaSearchDollar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading";

//https://coinlib.io/api/v1/coin?key=9b74f336bee213f4&pref=EUR&symbol=BTC
//https://www.mercadobitcoin.com.br/api-doc/

interface CoinProps {
  name: string;
  delta_24h: string;
  price: string;
  symbol: string;
  volume_24h: string;
  market_cap: string;
  numberDelta?: number;
}

interface FormattedCoinProps extends CoinProps {
  formatedPrice: string;
  formatedMarket: string;
}

interface ApiResponse {
  coins: CoinProps[];
}

export function Home() {
  const [coins, setCoins] = useState<FormattedCoinProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://sujeitoprogramador.com/api-cripto/?key=9b74f336bee213f4&=prefBRL"
        );
        // if (!response.ok) {
        //   throw new Error("Falha na resposta da API");
        // }
        const data: ApiResponse = await response.json();

        const coinsData = data.coins.slice(0, 15);

        const price = Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const formatResult = coinsData.map((item) => ({
          ...item,
          formatedPrice: price.format(Number(item.price)),
          formatedMarket: price.format(Number(item.market_cap)),
          numberDelta: parseFloat(item.delta_24h.replace(",", ".")),
        }));

        // console.log(parseFloat(formatResult[0].delta_24h.replace(",", ".")));
        setCoins(formatResult);
        setLoading(false);
      } catch (err) {
        // O Erro será tratado aqui
        console.error("Ocorreu um erro ao obter os dados:", err);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (inputValue === "") return;

    navigate(`/detail/${inputValue}`);
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          placeholder="Digite o simbolo da moeda: BTC..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">
          <FaSearchDollar size={30} color="#FFF" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor Global</th>
            <th scope="col">Preço</th>
            <th scope="col">Lucro/Perda</th>
          </tr>
        </thead>

        <tbody id="tbody">
          {coins.map((coin) => (
            <tr key={coin.name} className={styles.tr}>
              <td className={styles.tdLabel} data-label="Moeda">
                <Link className={styles.link} to={`/detail/${coin.symbol}`}>
                  <span>{coin.name}</span> | {coin.symbol}
                </Link>
              </td>
              <td className={styles.tdLabel} data-label="Mercado">
                {coin.formatedMarket}
              </td>
              <td className={styles.tdLabel} data-label="Preço">
                {coin.formatedPrice}
              </td>
              <td
                className={
                  coin.numberDelta && coin.numberDelta >= 0
                    ? styles.tdProfit
                    : styles.tdLoss
                }
                data-label="Volume"
              >
                <span>{coin.delta_24h}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
