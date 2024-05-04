import Category from "../../components/category-container/Category-container.component";
import { Outlet } from "react-router-dom";
import Sponsors from "../../components/sponsor/Sponsors";
const Home = () => {
  return (
    <>
      <Outlet />
      <Category />
      <Sponsors />
    </>
  );
};

export default Home;
