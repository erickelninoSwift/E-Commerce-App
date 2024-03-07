import { useEffect } from "react";
import "./categories.styles.scss";
import Category_item from "./components/category-item/Category_item.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  // const getAlldata = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://fakestoreapi.com/products/category/jewelery"
  //     );
  //     const data = await response.json();

  //     console.log(data);
  //   } catch (error) {
  //     console.log("data fetched failed", error);
  //   }
  // };

  // useEffect(() => {
  //   getAlldata();
  // }, []);
  return (
    <div className="categories-container">
      {categories.map((myCategory) => {
        const { id } = myCategory;
        return <Category_item key={id} category={myCategory} />;
      })}
    </div>
  );
};

export default App;
