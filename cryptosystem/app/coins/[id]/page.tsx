import Converter from "@/components/shared/Converter";
import { LiveDataWrapper } from "@/components/shared/LiveDataWrapper";
import { fetcher } from "@/lib/coingeko.actions";
import { formatPercentage } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const page = async ({ params }: NextPageProps) => {
  const { id } = await params;
  const [coinData, coinOHLCData] = await Promise.all([
    fetcher<CoinDetailsData>(`/coins/${id}`, {
      dex_pair_format: "contract_address",
    }),
    fetcher<OHLCData[]>(`/coins/${id}/ohlc`, {
      vs_currency: "usd",
      days: 1,
      precision: "full",
    }),
  ]);
  
  const coinDetails = [
    {
      label: "Market Cap",
      value: formatPercentage(coinData.market_data.market_cap.usd),
    },
    {
      label: "Market Cap Rank",
      value: `# ${coinData.market_cap_rank}`,
    },
    {
      label: "Total Volume",
      value: formatPercentage(coinData.market_data.total_volume.usd),
    },
    {
      label: "Website",
      value: "-",
      link: coinData.links.homepage[0],
      linkText: "Homepage",
    },
    {
      label: "Explorer",
      value: "-",
      link: coinData.links.blockchain_site[0],
      linkText: "Explorer",
    },
    {
      label: "Community",
      value: "-",
      link: coinData.links.subreddit_url,
      linkText: "Community",
    },
  ];

  return (
    <main id="coin-details-page">
      <section className="primary">
        <LiveDataWrapper
          coinId={id}
          coin={coinData}
          coinOHLCData={coinOHLCData}
        >
          <h4>Exchange Listings</h4>
        </LiveDataWrapper>
      </section>

      <section className="secondary">
        <div className="details">
          <h4>Coin Details</h4>
          <Converter
            symbol={coinData.symbol}
            icon={coinData.image.small}
            priceList={coinData.market_data.current_price}
          />
          <ul className="details-grid">
            {coinDetails.map(({ label, value, link, linkText }, index) => (
              <li key={index}>
                <p className={label}>{label}</p>

                {link ? (
                  <div className="link">
                    <Link rel="noopener noreferrer" href={link} target="_blank">
                      {linkText || label}
                    </Link>
                    <ArrowUpRight size={16} />
                  </div>
                ) : (
                  <p className="text-base font-medium">{value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <ul className="details-grid"></ul>
      </section>
    </main>
  );
};

export default page;
