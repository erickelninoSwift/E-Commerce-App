import { Outlet, NavLink } from "react-router-dom";
import "./navigation.styles.scss";
// import logo from "../../assets/logo192.png";
import logo from "../../assets/crown.svg";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <NavLink className="logo-container" to={"/"}>
          <div>
            <img
              src={logo}
              alt="logo"
              className="logo"
              style={{ objectFit: "fill" }}
            />
          </div>
        </NavLink>

        <div className="nav-links-container">
          <NavLink
            className="nav-link"
            to={"/shop"}
            style={{ fontSize: "20px" }}
          >
            SHOP
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
