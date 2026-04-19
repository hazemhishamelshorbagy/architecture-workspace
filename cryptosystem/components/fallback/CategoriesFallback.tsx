import React from "react";

const CategoriesFallback = () => {
  return (
    <div id="categories" className="custom-scrollbar">
      <div className="flex items-center justify-between">
        <div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
      </div>

      <div className="mt-4 space-y-3">
        <div className="grid grid-cols-5 gap-4 px-2.5 py-3 bg-gray-200 dark:bg-gray-800 rounded">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 px-2.5 py-4 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFallback;
