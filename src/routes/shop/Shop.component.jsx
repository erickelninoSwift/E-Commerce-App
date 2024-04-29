import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contex/CategoriesContext";
import Product from "../../components/product/Product";

// import "./shop.styles.scss";
const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  console.log(categories);
  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        return (
          <Fragment key={title}>
            <section className="bg-white py-10 text-gray-700 sm:py-16 lg:py-10">
              <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="">
                  <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
                  {categories[title].map((myproduct) => {
                    return (
                      <Product key={myproduct.id} itemDetails={myproduct} />
                    );
                  })}
                </div>
              </div>
            </section>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
