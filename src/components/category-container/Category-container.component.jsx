import "./categories.styles.scss";
import CategoryItem from "../category-item/Category_item.component";
import myCategories from "../../data/category";

const Category = () => {
  return (
    <div className="categories-container my-[5px] h-[100%]">
      {myCategories.map((myCategory) => {
        return <CategoryItem key={myCategory.id} category={myCategory} />;
      })}
    </div>
  );
};

export default Category;
