import { fetcher } from "@/lib/coingeko.actions";
import React from "react";
import Datatable from "@/components/shared/Datatable";
import clsx from "clsx";
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TrendingCoinsFallback from "../fallback/TrendingCoinsFallback";
import { formatPrice } from "@/lib/utils";

const TrendingCoins = async () => {
  let trendingCoins;
  try {
    trendingCoins = await fetcher<{ coins: TrendingCoin[] }>(
      "/search/trending",
      undefined,
      300,
    );
  } catch (error) {
    console.error("Error fetching coin details:", error);
    return <TrendingCoinsFallback />;
  }

  const columns: DataTableColumn<TrendingCoin>[] = [
    {
      header: "Name",
      cell: (coin) => {
        const item = coin.item;
        return (
          <Link href={`/coins/${item.id}`} className="flex items-center gap-2">
            <Image src={item.large} alt={item.name} width={36} height={36} />
            <p>{item.name}</p>
          </Link>
        );
      },
    },
    {
      header: "24h Change",
      cell: (coin) => {
        const item = coin.item;
        const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
        return (
          <p
            className={clsx(
              "price-change",
              isTrendingUp ? "text-green-500" : "text-red-500",
            )}
          >
            {isTrendingUp ? (
              <TrendingUpIcon width={16} height={16} />
            ) : (
              <TrendingDownIcon width={16} height={16} />
            )}
            {item.data.price_change_percentage_24h.usd.toFixed(2)}%
          </p>
        );
      },
    },
    {
      header: "Price",
      cell: (coin) => {
        const item = coin.item;
        return <p>{formatPrice(item.data.price)}</p>;
      },
    },
  ];

  return (
    <div id="trending-coins">
      <h4>Trending coins</h4>
      <Datatable
        data={trendingCoins.coins.slice(0, 6) || []}
        columns={columns}
        rowKey={(row) => row.item.id}
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};

export default TrendingCoins;
