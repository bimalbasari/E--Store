import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdShoppingCart, MdArrowDropDown } from "react-icons/md";

const Header = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
      <nav className="bg-primary shadow text-light nav-top-bg sm:block hidden">
        <div className=" flex item-center justify-between mx-8">
          <div className="py-2">
            <Link href="/" className="text-white text-xs italic">
              Get Up to 70% Discount Everyday
            </Link>
          </div>

          <div className="py-2">
            <button className="text-white text-sm flex font-medium " onClick={() => setDropdown(!dropdown)}>My Account <MdArrowDropDown className="mt-2" /></button>
            {dropdown &&

              <ul className=" w-24 bg-white p-3 absolute rounded text-sm">
                <li className="my-1 hover:text-blue-600 hover:font-bold" >
                  <Link href="/register">
                    Register
                  </Link>
                </li>
                <hr />
                <li className="my-1  hover:text-blue-600 hover:font-bold">
                  <Link href="/login">
                    Log in
                  </Link>
                </li>
              </ul>}
          </div>
        </div>
      </nav>

      <nav className=" nav-bg">
        <div className="flex items-center justify-between mx-8">
          <div className="nav-logo py-2">
            <Link href='/'>
              <Image
                src="/images/NWG_logo.jpg"
                width={50}
                height={50}
                alt="Logo"
                className="rounded-full"
              />
            </Link>
          </div>
          <Link href="/cart" className="text-white flex items-center gap-1"> <MdShoppingCart className="bg-blue-700 rounded-full w-6 p-1 h-6" />2 items</Link>
        </div>
      </nav>

      <nav className="w-full flex item-center justify-center mt-6">
        <ul className="drop-shadow bg-gray-50 flex item-center text-sm py-2 w-4/5 rounded ">
          <li className="mx-2  hover:text-blue-600 hover:font-bold">
            <Link href="/store">
              Store
            </Link>
          </li>
          <li className="mx-2  hover:text-blue-600 hover:font-bold">
            <Link href="/about-us">
              About Us
            </Link>
          </li>
          <li className="mx-2  hover:text-blue-600 hover:font-bold">
            <Link href="/supprt"> Support</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
