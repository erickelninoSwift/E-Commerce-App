// import { useEffect } from "react";
import "./index.css";
import Category from "./components/category-container/Category-container.component";
const App = () => {
  return (
    <>
      <Category />;
    </>
  );
};

export default App;

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
