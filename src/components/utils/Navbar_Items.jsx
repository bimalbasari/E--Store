import { useState } from "react";
import Link from "next/link";
import { MdArrowDropDown, MdShoppingCart } from "react-icons/md";

// all NavBar items

//Navbar User account DropDown

export const MyAccount = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="py-2">
      <button
        className="text-white text-sm flex font-medium "
        onClick={() => setDropdown(!dropdown)}
      >
        My Account <MdArrowDropDown className="mt-1" size={20} />
      </button>
      {dropdown && (
        <ul className=" w-24 sm:bg-gray-200 bg-black p-3 sm:m-0  mx-20 absolute rounded text-sm">
          <li className="my-1 hover:text-blue-600 hover:font-bold">
            <Link href="/register">Register</Link>
          </li>
          <hr />
          <li className="my-1  hover:text-blue-600 hover:font-bold">
            <Link href="/login">Log in</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

// Navbar cart

export const MyCart = () => {
  return (
    <Link href="/cart" className="text-white flex items-center gap-1 ">
      {" "}
      <MdShoppingCart className="bg-blue-600 rounded-full p-1" size={28} />2
      items
    </Link>
  );
};

// Navbar Store

export const Store = () => {
  return <Link href="/">Store</Link>;
};

// Navbar about-us

export const AboutUs = () => {
  return <Link href="/about">About Us</Link>;
};

// Navbar support

export const Support = () => {
  return <Link href="/support"> Support</Link>;
};
