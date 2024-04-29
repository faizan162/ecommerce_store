import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 left-0 bg-white shadow-md z-10">
      <div className="container">
        <div className="navbar flex justify-between items-center  ">
          <Link className="text-3xl font-medium " to={"/"}>
            FASCO
          </Link>
          <Link className="flex items-center " to={"/cart"}>
            <CiShoppingCart className="text-4xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
