import CategroriesPreview from "../Categories-preview/myCategoryPreview";
import Category from "../Category/Category.component";
import { Route, Routes } from "react-router-dom";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategroriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
