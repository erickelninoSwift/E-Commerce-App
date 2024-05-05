import { useContext, Fragment, useEffect } from "react";
import { CategoriesContext } from "../../contex/CategoriesContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import "./myCategoryPreview.scss";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contex/Cart.Context";
import Sponsors from "../../components/sponsor/Sponsors";
import LoadSpinners from "../../components/Loaders/LoadSpinners";
const CategroriesPreview = () => {
  const navigate = useNavigate();
  const { categories } = useContext(CategoriesContext);
  const { setIsCartOpen } = useContext(CartContext);
  const CategoriesNumber = Object.keys(categories).length;
  useEffect(() => {
    setIsCartOpen(false);
  }, []);

  return (
    <Fragment>
      {CategoriesNumber === 0 && <LoadSpinners />}
      {CategoriesNumber > 0 &&
        Object.keys(categories).map((title) => {
          return (
            <Fragment key={title}>
              <section className=" bg-white py-10 text-gray-700 sm:py-16 lg:py-10">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                  <div className="">
                    <h2 className="text-2xl ml-3 font-bold sm:text-3xl">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`${title}`)}
                      >
                        {" "}
                        {title.toUpperCase()}
                      </span>
                    </h2>
                  </div>
                  <CategoryPreview
                    category={title}
                    products={categories[title]}
                  />
                </div>
              </section>
            </Fragment>
          );
        })}
      <Sponsors />
    </Fragment>
  );
};

export default CategroriesPreview;
