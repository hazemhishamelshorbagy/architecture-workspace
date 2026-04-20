import Datatable from "@/components/shared/Datatable";
import TrendingCoinsFallback from "@/components/fallback/TrendingCoinsFallback";
import Coinspagination from "@/components/shared/CoinsPagination";
import { fetcher } from "@/lib/coingeko.actions";
import { formatPrice, percentageFormatter } from "@/lib/utils";
import clsx from "clsx";
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const page = async ({ searchParams }: NextPageProps) => {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const perPage = 10;
  let coinsData;
  try {
    coinsData = await fetcher<CoinMarketData[]>("/coins/markets", {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: perPage,
      page: currentPage,
      sparkline: "false",
      price_change_percentage: "24h",
    });
  } catch (error) {
    console.error("Error fetching coin details:", error);
    return <TrendingCoinsFallback />;
  }

  const columns: DataTableColumn<CoinMarketData>[] = [
    {
      header: "Rank",
      cellClassName: "rank-cell",
      cell: (coin) => (
        <>
          #{coin.market_cap_rank}
          <Link href={`/coins/${coin.id}`} aria-label="View coin" />
        </>
      ),
    },
    {
      header: "Token",
      cellClassName: "token-cell",
      cell: (coin) => (
        <div className="token-info">
          <Image src={coin.image} alt={coin.name} width={36} height={36} />
          <p>
            {coin.name} ({coin.symbol.toUpperCase()})
          </p>
        </div>
      ),
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: (coin) => formatPrice(coin.current_price),
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: (coin) => {
        const isTrendingUp = coin.price_change_percentage_24h > 0;
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
            {percentageFormatter.format(coin.price_change_percentage_24h)}
          </p>
        );
      },
    },
    {
      header: "Market Cap",
      cellClassName: "cap-cell",
      cell: (
        coin, // Use parentheses for implicit return
      ) => <p>{formatPrice(coin.market_cap)}</p>,
    },
  ];
  const hasMorePage = coinsData.length === perPage;
  const estimatedTotalPages =
    currentPage >= 100 ? Math.ceil(currentPage / 100) * 100 + 100 : 100;
  return (
    <main id="coins-page">
      <div className="content">
        <h4>All Coins</h4>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <Datatable
            tableClassName="coins-table"
            columns={columns}
            data={coinsData || []}
            rowKey={(coin) => coin.id}
          />
        </Suspense>
        <Coinspagination
          totalPages={estimatedTotalPages}
          hasMorePages={hasMorePage}
          currentPage={currentPage}
        />
      </div>
    </main>
  );
};

export default page;
