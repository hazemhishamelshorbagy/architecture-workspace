import React from "react";

const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview">
      <div className="header pt-2 flex items-center gap-4">
        {/* Image skeleton */}
        <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
        
        {/* Text skeleton */}
        <div className="flex flex-col gap-3">
          {/* Symbol skeleton */}
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          
          {/* Price skeleton */}
          <div className="h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CoinOverviewFallback;
