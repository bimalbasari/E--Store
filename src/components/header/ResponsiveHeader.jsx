import { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { AboutUs, MyCart, Store, Support } from "./Header_Items";
import  MyAccount from "../Myaccount"

// This Nav Layout for small devices

const ResponsiveHeader = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [dropdown, setDropdown] = useState(true);
  const [account, setAccount] = useState(false);

  return (
    <div className="w-full h-auto bg-transparent absolute z-40 sm:hidden">
      {showCategory && (
        <div onClick={() => setShowCategory(!showCategory)}>
          <Sidebar />
        </div>
      )}

      {account && (
        <div className="relative" onClick={() => setAccount(false)}>
          <MyAccount />
        </div>
      )}

      {dropdown && (
        <div
          className="bg-blue-500 mx-4 rounded"
          onClick={() => setDropdown(false)}
        >
          <ul className="divide-y divide-gray-400 rounded-md overflow-hidden text-white font-semibold">
            <li
              className="p-3 hover:bg-blue-400"
              onClick={() => setAccount(true)}
            >
              Account
            </li>

            <li className="p-3  hover:bg-blue-400">
              <MyCart />
            </li>
            <li className="p-3  hover:bg-blue-400">
              <div onClick={() => setShowCategory(!showCategory)}>
                Categories
              </div>
            </li>
            <li className="p-3  hover:bg-blue-400">
              <Store />
            </li>

            <li className="p-3  hover:bg-blue-400">
              <AboutUs />
            </li>

            <li className="p-3  hover:bg-blue-400">
              <Support />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponsiveHeader;
