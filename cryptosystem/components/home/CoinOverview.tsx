import { fetcher } from "@/lib/coingeko.actions";
import { formatPrice } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import CoinOverviewFallback from "../fallback/CoinOverviewFallback";
const CoinOverview = async () => {
  let coin;

  try {
    coin = await fetcher<CoinDetailsData>("/coins/bitcoin", {
      dex_pair_format: "symbol",
    });
  } catch (error) {
    console.error("Error fetching coin details:", error);
    return <CoinOverviewFallback />;
  }
  return (
    <div id="coin-overview">
      <div className="header pt-2">
        <Image src={coin.image.large} alt={coin.name} width={56} height={56} />
        <div className="info">
          <p>
            {coin.name}/{coin.symbol.toUpperCase()}
          </p>
          <h1>{formatPrice(coin.market_data.current_price.usd)}</h1>
        </div>
      </div>
    </div>
  );
};

export default CoinOverview;
