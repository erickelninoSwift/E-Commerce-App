import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contex/CategoriesContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import "./myCategoryPreview.scss";

const CategroriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  console.log(categories);
  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        return (
          <Fragment key={title}>
            <section className=" bg-white py-10 text-gray-700 sm:py-16 lg:py-10">
              <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="">
                  <h2 className="text-2xl ml-3 font-bold sm:text-3xl">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => console.log("lets get it")}
                    >
                      {" "}
                      {title.toUpperCase()}
                    </span>
                  </h2>
                </div>
                <CategoryPreview products={categories[title]} />
              </div>
            </section>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default CategroriesPreview;
