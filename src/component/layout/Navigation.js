import { Outlet, NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Best Boba Milk Tea</div>
      <nav>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "rgb(222, 166, 85)",
                  color: "rgb(121, 30, 30)",
                }
              : { color: "rgb(105, 86, 74)" }
          }
          to="/"
        >
          All BobaShops
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "rgb(222, 166, 85)",
                  color: "rgb(121, 30, 30)",
                }
              : { color: "rgb(105, 86, 74)" }
          }
          to="/newbobashop"
        >
          Add Boba Shop
        </NavLink>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navigation;
