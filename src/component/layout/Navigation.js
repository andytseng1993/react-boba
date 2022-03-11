import { Outlet, NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink
          to="/"
        >
          Best Boba Milk Tea
        </NavLink>
      </div>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.isactive : classes.inactive
          }
          to="/"
        >
          All BobaShops
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.isactive : classes.inactive
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
