import CategroriesPreview from "../Categories-preview/myCategoryPreview";
import Category from "../Category/Category.component";
import SignleProduct from "../../components/single_product/Signleproduct.components";
import { Route, Routes } from "react-router-dom";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategroriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path=":productID" element={<SignleProduct />} />
    </Routes>
  );
};

export default Shop;
