// import { Children } from "react";
import "./categories.styles.scss";
import CategoryItem from "../category-item/Category_item.component";
import categories from "../../data/category";

const Category = () => {
  return (
    <div className="categories-container">
      {categories.map((myCategory) => {
        const { id } = myCategory;
        return <CategoryItem key={id} category={myCategory} />;
      })}
    </div>
  );
};

export default Category;
