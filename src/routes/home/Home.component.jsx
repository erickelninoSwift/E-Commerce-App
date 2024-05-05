import Category from "../../components/category-container/Category-container.component";
import { Outlet } from "react-router-dom";
import Sponsors from "../../components/sponsor/Sponsors";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contex/Cart.Context";
import LoadSpinners from "../../components/Loaders/LoadSpinners";
const Home = () => {
  const { setIsCartOpen } = useContext(CartContext);
  useEffect(() => {
    setIsCartOpen(false);
  }, []);
  return (
    <>
      <Outlet />
      <Category />
      <Sponsors />
      <LoadSpinners />
    </>
  );
};

export default Home;
