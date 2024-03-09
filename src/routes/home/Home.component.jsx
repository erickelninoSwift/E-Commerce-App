import Category from "../../components/category-container/Category-container.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
      <Category />
    </>
  );
};

export default Home;
