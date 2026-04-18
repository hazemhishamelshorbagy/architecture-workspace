import React from "react";

const TrendingCoinsFallback = () => {
  return (
    <div id="trending-coins">
      <h1 className="text-xl font-bold px-2.5 py-2.5">Trending coins</h1>

      <div className="space-y-2">
        {/* Table header skeleton */}
        <div className="grid grid-cols-3 gap-4 px-2.5 py-3 bg-gray-200 dark:bg-gray-800 rounded">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>

        {/* Table rows skeleton */}
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 gap-4 px-2.5 py-3 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="h-9 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
            <div className="h-9 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
            <div className="h-9 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoinsFallback;
