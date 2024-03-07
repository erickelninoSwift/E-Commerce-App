import { Children } from "react";
import "./categories.styles.scss";
import Category_item from "../category-item/Category_item.component";
import categories from "../../data/category";

const Category = () => {
  return (
    <div className="categories-container">
      {categories.map((myCategory) => {
        const { id } = myCategory;
        return <Category_item key={id} category={myCategory} />;
      })}
    </div>
  );
};

export default Category;
