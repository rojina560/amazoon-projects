import { NavLink, Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
      <div className="p-6">
        <div className="flex justify-between ">
          <div>
            <h1>Amazoon</h1>
          </div>

          <nav>
            <ul className="flex gap-6">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/products"}>Products</NavLink>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </ul>
          </nav>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default MainLayout;