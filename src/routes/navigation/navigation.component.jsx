import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contex/UserContext";
import userICon from "../../assets/mipicture.jpeg";
import { signOutUserAuth } from "../signin/firebase";
import CartIcon from "../../components/shopping-cart-icon/CartIcon";
import ShoppingCart from "../../components/shopping-cart-icon/ShoppingCart";
import { CartContext } from "../../contex/Cart.Context";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [isShowing, setIsShowing] = useState(false);
  const signOutHandler = async () => {
    try {
      await signOutUserAuth();
      setCurrentUser(null);
    } catch (error) {
      console.log(`Error was found while signing out ${error}`);
    }
  };
  useEffect(() => {}, [currentUser]);
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <NavLink className="btn btn-ghost text-xl" to={"/"}>
            J-SHOP
          </NavLink>
        </div>
        <div className="flex-none gap-5">
          <ul className="menu menu-horizontal gap-5 px-1">
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>SHOP</NavLink>
            </li>
            {currentUser ? (
              ""
            ) : (
              <li>
                <NavLink to={"/signin"}>LOGIN</NavLink>
              </li>
            )}
          </ul>
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div> */}
        </div>
        <div className="flex-none">
          <CartIcon />
          {isCartOpen && <ShoppingCart />}
          {currentUser && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={userICon} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>

                <li>
                  <a onClick={signOutHandler}>Logout</a>
                </li>
              </ul>
            </div>
          )}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
          </label>
        </div>
      </div>

      <Outlet />
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            J-SHOP
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Navigation;
