import Home from "./routes/home/Home.component";
import Shop from "./routes/shop/Shop.component";
import { Routes, Route } from "react-router-dom";
import CheckoutSecondPage from "./routes/checkout/CheckoutSecondPage";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/SignIn.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/checkout" element={<CheckoutSecondPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
