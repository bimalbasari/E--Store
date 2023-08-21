
import { GlobalData } from "@/pages/_app";
import { useContext } from "react";
import Link from "next/link"
import Image from "next/image";


const MyAccount = () => {
    const { user } = useContext(GlobalData)

    return (
        <>
            {user && user ?
                <ul className="right-0 z-40  sm:m-0   absolute ">
                    <div className="w-60 text-left bg-black text-white rounded ">
                        <li className=" border-b border-gray-300 m-2 p-2 ">
                            <Image src={user.image} width={100} height={100} alt="user" className='m-auto  border rounded-full' />
                        </li>
                        <li className="p-2 border-b border-gray-300">
                            <span className="font-semibold px-2 ">Username:</span>{user.username}
                        </li>
                        <li className="p-2 border-b border-gray-300">
                            <span className="font-semibold px-2 ">Name:</span>{`${user.firstName} ${user.lastName}`}
                        </li>

                        <li className="p-2 border-b border-gray-300">
                            <span className="font-semibold px-2 ">Email:</span>{user.email}
                        </li>

                        <li className="p-2">
                            <span className="font-semibold px-2 ">Gender:</span>{user.gender}
                        </li>
                    </div>

                </ul>
                : <ul className=" sm:w-24 w-full bg-gray-200 text-center font-semibold   p-3 sm:m-0   absolute rounded text-sm">

                    <li className="my-1 hover:text-blue-600 hover:font-bold">
                        <Link href="/register">Register</Link>
                    </li>
                    <hr />
                    <li className="my-1  hover:text-blue-600 hover:font-bold">
                        <Link href="/login">Log in</Link>
                    </li>

                </ul>
            }
        </>
    )

};

export default MyAccount