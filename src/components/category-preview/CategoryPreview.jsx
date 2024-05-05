import React, { Fragment } from "react";
import Product from "../product/Product";
const CategoryPreview = ({ category, products }) => {
  return (
    <Fragment>
      <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
        {products
          .filter((_, index) => index < 4)
          .map((myproduct) => {
            return (
              <Product
                key={myproduct.id}
                currentCategory={category}
                itemDetails={myproduct}
              />
            );
          })}
      </div>
    </Fragment>
  );
};

export default CategoryPreview;
