import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {
    const [open, setOpen] =useState(false)
    const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/contact', name: 'Contact' },
  { id: 4, path: '/products', name: 'Products' },
  { id: 5, path: '/dashboard', name: 'Dashboard' },
];



    return (
      <nav>
        <div className="md:hidden text-5xl " onClick={() => setOpen(!open)}>
          {open === true ? (
            <MdOutlineClose></MdOutlineClose>
          ) : (
            <IoMenu></IoMenu>
          )}
        </div>
        <ul className={`flex absolute md:static bg-yellow-300 p-4 ${open ? 'top-18':'-top-60'}`}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default NavBar;