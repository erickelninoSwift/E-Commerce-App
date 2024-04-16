import { useContext } from "react";
import { ProductsContext } from "../../contex/ProductsContext";
import Product from "../../components/product/Product";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <Product />
      <ul>
        {products &&
          products.map((data) => {
            const { id, name } = data;
            return <li key={id}>{name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Shop;
