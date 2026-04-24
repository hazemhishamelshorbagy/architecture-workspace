import React from "react";
import CoinHeader from "./CoinHeader";
import { Separator } from "./ui/separator";
import CandleStickChart from "./CandleStickChart";
import { formatPrice } from "@/lib/utils";

export const LiveDataWrapper = ({
  children,
  coinId,
  coin,
  coinOHLCData,
}: LiveDataProps) => {
  const tradeColumns: DataTableColumn<Trade>[] = [
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: (trade) => (trade.price ? formatPrice(trade.price) : '-'),
    },
    {
      header: 'Amount',
      cellClassName: 'amount-cell',
      cell: (trade) => trade.amount?.toFixed(4) ?? '-',
    },
    {
      header: 'Value',
      cellClassName: 'value-cell',
      cell: (trade) => (trade.value ? formatPrice(trade.value) : '-'),
    },
    {
      header: 'Buy/Sell',
      cellClassName: 'type-cell',
      cell: (trade) => (
        <span className={trade.type === 'b' ? 'text-green-500' : 'text-red-500'}>
          {trade.type === 'b' ? 'Buy' : 'Sell'}
        </span>
      ),
    },
    {
      header: 'Time',
      cellClassName: 'time-cell',
      cell: (trade) => (trade.timestamp ? trade.timestamp : '-'),
    },
  ];

  return (
    <section id="live-data-wrapper">
      <CoinHeader
        name={coin.name}
        image={coin.image.large}
        livePrice={coin.market_data.current_price.usd}
        livePriceChangePercentage24h={
          coin.market_data.price_change_percentage_24h_in_currency.usd
        }
        priceChangePercentage30d={
          coin.market_data.price_change_percentage_30d_in_currency.usd
        }
        priceChange24h={coin.market_data.price_change_24h_in_currency.usd}
      />
      <Separator className="divider" />
      <div className="trend">
        <CandleStickChart
          coinId={coinId}
          data={coinOHLCData}
          initialPeriod="daily"
        >
          <h4>Trend Overview</h4>
        </CandleStickChart>
      </div>
      <Separator className="divider" />
       {tradeColumns && (
        <div className="trades">
          <h4>Recent Trades</h4>

          
        </div>
      )}
    </section>
  );
};
