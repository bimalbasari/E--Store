import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbBrandAdobe } from "react-icons/tb";

import { GiHamburgerMenu } from "react-icons/gi";
import {
  AboutUs,
  MyAccount,
  MyCart,
  Store,
  Support,
} from "../utils/Navbar_Items";

import ResponsiveHeader from "../utils/ResponsiveHeader";

const Header = () => {

  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {/* Top navbar */}

      <nav className="bg-primary shadow text-light nav-top-bg sm:block hidden">
        <div className=" flex item-center justify-between mx-8">
          <div className="py-2">
            <Link href="/" className="text-white text-xs italic">
              Get Up to 70% Discount Everyday
            </Link>
          </div>
          <MyAccount />
        </div>
      </nav>
      {/* Middle NavBar */}

      <nav className=" nav-bg">
        <div className="flex items-center justify-between mx-8">
          <div className="nav-logo py-2">
            <Link href="/">
              <TbBrandAdobe size={35} className="text-yellow-400 font-bold" />
            </Link>
          </div>

{/* HamburgerMenu for small devices */}
          <div
            className="sm:hidden block"
            onClick={() => setDropdown(!dropdown)}
          >
            <GiHamburgerMenu size={35} className="text-white" />
          </div>

          <div className=" sm:block hidden">
            <MyCart />
          </div>
        </div>
      </nav>

      {dropdown && <ResponsiveHeader />}

      {/* Button navbar */}

      <nav className="w-full sm:flex item-center justify-center md:mt-6 sm:mt-4 hidden">
        <ul className=" bg-gray-50 drop-shadow flex item-center text-sm py-2 w-4/5 rounded ">
          <li className="mx-2  hover:text-blue-600 hover:font-semibold">
            <Store />
          </li>
          <li className="mx-2  hover:text-blue-600 hover:font-semibold">
            <AboutUs />
          </li>
          <li className="mx-2  hover:text-blue-600 hover:font-semibold">
            <Support />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
