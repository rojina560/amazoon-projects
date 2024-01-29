import { NavLink, Outlet } from "react-router-dom";
import Footer from "../assets/Pages/Footer/Footer";


const MainLayout = () => {
    return (
      <div className="">
        <div className="flex justify-between items-center shadow-2xl p-6">
          <div>
            <h1 className="text-4xl text-amber-500 font-bold">Amazoon</h1>
          </div>

          <nav>
            <ul className="flex gap-6 text-xl font-bolder">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-orange-400 p-2 rounded-md text-gray-500"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/products"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-orange-400 p-2 rounded-md text-gray-500"
                    : ""
                }
              >
                Products
              </NavLink>
              <NavLink
                to={"/dashboard"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-orange-400 p-2 rounded-md text-gray-500"
                    : ""
                }
              >
                Dashboard
              </NavLink>
            </ul>
          </nav>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;