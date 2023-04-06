import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "tomato",
  };
  return (
    <nav>
      <NavLink to="/" end activeStyle={activeStyle}>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="sobre" activeStyle={activeStyle}>
        Sobre
      </NavLink>{" "}
      |{" "}
      <NavLink to="login" activeStyle={activeStyle}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
