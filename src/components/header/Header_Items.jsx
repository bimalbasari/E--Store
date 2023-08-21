import {  useEffect, useState } from "react";
import Link from "next/link";
import { MdShoppingCart} from "react-icons/md";
import { getCartItems } from "../../utils/CartItesms";

// all NavBar items

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
