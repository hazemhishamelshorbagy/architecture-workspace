import { Suspense } from "react";
import TrendingCoins from "@/components/home/TrendingCoins";
import CoinOverview from "@/components/home/CoinOverview";
import CoinOverviewFallback from "@/components/fallback/CoinOverviewFallback";
import TrendingCoinsFallback from "@/components/fallback/TrendingCoinsFallback";
import Categories from "@/components/home/Categories";
import CategoriesFallback from "@/components/fallback/CategoriesFallback";

const Page = async () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="main-container inner">
        <section className="home-grid">
          <Suspense fallback={<CoinOverviewFallback />}>
            <CoinOverview />
          </Suspense>
          <Suspense fallback={<TrendingCoinsFallback />}>
            <TrendingCoins />
          </Suspense>
        </section>
        <section className="w-full mt-7 space-y-4">
          <Suspense fallback={<CategoriesFallback />}>
            <Categories />
          </Suspense>
        </section>
      </main>
    </div>
  );
};
export default Page;
