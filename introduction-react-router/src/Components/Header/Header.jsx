import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <br />

        <Link to="/">Home</Link>

        <NavLink to={"/users"}>users</NavLink>
        <NavLink to={"/posts"}>posts</NavLink>
        <NavLink to={"/albums"}>albums</NavLink>
        <NavLink to={"/meals"}>meals</NavLink>
        <NavLink to={"/recipes"}>recipes</NavLink>
        <NavLink to={"/todos"}>todos</NavLink>
        <NavLink to={"/about"}>about</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
