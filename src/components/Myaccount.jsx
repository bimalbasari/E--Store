import { GlobalData } from "@/pages/_app";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { getUserData, removeUser } from "@/utils/auth";

const MyAccount = () => {
  const [user, setUser] = useState(getUserData)
  return (
    <div className="relative">
      {user ? (
        <div className="absolute right-0 z-40 w-64 bg-green-100 text-blue-700 rounded shadow-lg p-4">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32">
              <Image
                src={user.image}
                width={128}
                height={128}
                alt="user"
                className="rounded-full border border-gray-400"
              />
            </div>
            <h2 className="text-xl font-semibold mt-2">{user.username}</h2>
          </div>
          <ul className="mt-4">
            <li className="border-b border-gray-300 py-2">
              <span className="font-semibold">Name:</span>{" "}
              {`${user.firstName} ${user.lastName}`}
            </li>
            <li className="border-b border-gray-300 py-2">
              <span className="font-semibold">Email:</span> {user.email}
            </li>
            <li className="py-2">
              <span className="font-semibold">Gender:</span> {user.gender}
            </li>
            <li className="py-2">
              <button onClick={removeUser} className="bg-blue-500 w-full px-2 py-1 rounded  font-bold text-white">Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <ul className="absolute right-0 z-40 w-24 bg-gray-200 text-center font-semibold p-3 rounded text-sm">
          <li className="my-2 hover:text-blue-600 hover:font-bold">
            <Link href="/register">Register</Link>
          </li>
          <li className="my-2 hover:text-blue-600 hover:font-bold">
            <Link href="/login">Log in</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MyAccount;
