import { fetcher } from "@/lib/coingeko.actions";
import React from "react";
import Datatable from "../Datatable";

const Categories = async () => {
  const categories = await fetcher<Category[]>("/coins/categories");
  const coloumns: DataTableColumn<Category>[] = [
    {
      header: "Category",
      headClassName: "category-cell",
      cell: (category) => {
      const categoryName= category.name;
        return (
          <p>
            {categoryName}
          </p>
       )
      },
    }
   
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
