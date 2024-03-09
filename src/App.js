import Home from "./routes/home/Home.component";
import Shop from "./routes/shop/Shop.component";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am The navigation Bar</h1>
      </div>
      <Outlet />
    </div>
  );
};
