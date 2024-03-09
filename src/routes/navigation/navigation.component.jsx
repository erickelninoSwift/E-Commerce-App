import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <NavLink className="logo-container" to={"/"}>
          <div>
            <img
              src="../../assets/logo192.png"
              style={{ objectFit: "cover" }}
            />
          </div>
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to={"/"}>
            HOME
          </NavLink>
          <NavLink className="nav-link" to={"/shop"}>
            SHOP
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
