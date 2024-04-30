import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contex/CategoriesContext";
import Product from "../../components/product/Product";
const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(() => {
      return categories[category];
    });
  }, [categories, category]);
  console.log(products);
  return (
    <section className=" bg-white py-10 text-gray-700 sm:py-16 lg:py-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-2xl ml-3 font-bold sm:text-3xl">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => console.log("lets get it")}
            >
              {" "}
              {category.toUpperCase()}
            </span>
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

export default Category;
