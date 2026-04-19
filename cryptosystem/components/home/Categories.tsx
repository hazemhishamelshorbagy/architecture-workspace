import { fetcher } from "@/lib/coingeko.actions";
import React from "react";
import Datatable from "../Datatable";
import clsx from "clsx";
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import CategoriesFallback from "../fallback/CategoriesFallback";

const Categories = async () => {
  let categories
  try {
   categories= await fetcher<Category[]>("/coins/categories");
  } catch (error) {
     console.error("Error fetching coin details:", error);
    return <CategoriesFallback/>
  }
  
  
  const coloumns: DataTableColumn<Category>[] = [
    {
      header: "Category",
      headClassName: "category-cell",
      cell: (category) => {
        const categoryName = category.name;
        return <p>{categoryName}</p>;
      },
    },
    {
      header: "Top Gainers",
      headClassName: "top-gainer-cell",
      cellClassName:"flex gap-1",
      cell: (category) =>

        category.top_3_coins.map((coin,coinIndex) => (
          <Image src={coin} alt={`${category.name} top coin ${coinIndex + 1}`} key={coin} width={28} height={28} />
        )),
    },
    {
      header: "24 Change",
      headClassName: "category-cell",
      cell: (category) => {
        const item = category.market_cap_change_24h;
        const isTrendingUp = item > 0;
        return (
          <p
            className={clsx(
              "price-change flex items-center gap-2",
              isTrendingUp ? "text-green-500" : "text-red-500",
            )}
          >
            {item.toFixed(2)}
            {isTrendingUp ? (
              <TrendingUpIcon width={16} height={16} />
            ) : (
              <TrendingDownIcon width={16} height={16} />
            )}
          </p>
        );
      },
    },
    {
      header: "Market Cap",
      headClassName: "category-cell",
      cell: (category) => {
        const marketCap = category.market_cap;
        return <p>{formatPrice(marketCap)}</p>;
      },
    },
    {
      header: "24 h Volume",
      headClassName: "category-cell",
      cell: (category) => {
        const volume24Usd = category.volume_24h;
        return <p>{formatPrice(volume24Usd)}</p>;
      },
    },
  ];
  return (
    <div id="categories" className="custom-scrollbar">
      <h4>Top Categories</h4>
      <Datatable
        columns={coloumns}
        data={categories?.slice(0, 10)}
        rowKey={(_, index) => index}
        tableClassName="mt-3"
      
      />
    </div>
  );
};

export default Categories;
