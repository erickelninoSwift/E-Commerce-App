import { useContext } from "react";
import { ProductsContext } from "../../contex/ProductsContext";
import Product from "../../components/product/Product";

// import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log(products.length);
  return (
    <section className="bg-white py-10 text-gray-700 sm:py-16 lg:py-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Our Collection
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
          {products &&
            products.map((myproduct) => {
              return <Product key={myproduct.id} itemDetails={myproduct} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
