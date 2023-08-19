import { useEffect, useState } from "react";
import Link from "next/link";
import { MdShoppingCart, MdSearch } from "react-icons/md";
import { getCartItems } from "../../utils/CartItesms";
import useSwr from "swr"
import { fetcher } from "@/utils/swrFetcher";
import { useRouter } from "next/router";
// all NavBar items

//Navbar User account DropDown

export const MyAccount = () => {

  return (
    <ul className=" sm:w-24 w-full bg-gray-200 text-center font-semibold   p-3 sm:m-0   absolute rounded text-sm">
      <li className="my-1 hover:text-blue-600 hover:font-bold">
        <Link href="/register">Register</Link>
      </li>
      <hr />
      <li className="my-1  hover:text-blue-600 hover:font-bold">
        <Link href="/login">Log in</Link>
      </li>
    </ul>
  )

};
// Search 
export const SearchBox = () => {
  const [search, setSearch] = useState()
  const router = useRouter()
  const handleSearch = () => {
    router.push(`/search/${search}`)
  }
  return (

    <div className="flex bg-white items-center rounded overflow-hidden w-full">
      <input
        type="text"
        className="h-8 w-auto outline-none px-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-gray-200 cursor-pointer" onClick={handleSearch}>
        <MdSearch size={25} className="text-blue-600 " />
      </button>
    </div>

  );
};
// Navbar cart

export const MyCart = ({ items }) => {
  const [cart, setCart] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const items = getCartItems()
      setCart(items.length)
    }, 1000)

  }, [])

  return (
    <Link href="/cart" className="text-white flex items-center gap-1 ">
      {" "}
      <MdShoppingCart className="bg-blue-600 rounded-full p-1" size={28} />
      {cart + "  items"}
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
