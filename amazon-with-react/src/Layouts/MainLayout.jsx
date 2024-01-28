import { NavLink, Outlet, useNavigation } from "react-router-dom";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state)
    return (
      <div>
        <section className="flex justify-between p-5 shadow-xl">
          <div>
            <h1>Amazon</h1>
          </div>
          <nav>
            <ul className="flex gap-5">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700" : ""
                }
              > Home</NavLink>
              <NavLink
                to={"/products"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700" : ""
                }
              > products</NavLink>
              <NavLink
                to={"/dashboard"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700" : ""
                }
              > Dashboard</NavLink>

            </ul>
          </nav>
        </section>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
        
      </div>
    );
};

export default MainLayout;