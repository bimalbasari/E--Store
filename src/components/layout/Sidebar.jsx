
import { MdCategory } from "react-icons/md"
import { BsDash } from "react-icons/bs"
import Link from "next/link";

const Sidebar = () => {


    return (
        <div className='w-full  hidden sm:block'>
            <div className="bg-gray-100 ">
                <ul className="divide-y divide-gray-400 rounded-md overflow-hidden">
                    <li className="p-4 nav-top-bg font-bold ">
                        <h5 className='text-white uppercase  flex items-center  justify-start gap-1'><MdCategory />Categories</h5>
                    </li>
                    <li className="p-3  hover:bg-gray-300">
                        <Link href="/" className='text-black flex items-center justify-start gap-1 capitalize'><BsDash />Smartphone</Link>
                    </li>
                    <li className="p-3  hover:bg-gray-300">
                        <Link href="/" className='text-black flex items-center justify-start gap-1 capitalize'><BsDash />Smartphone</Link>
                    </li>
                    <li className="p-3  hover:bg-gray-300">
                        <Link href="/" className='text-black flex items-center justify-start gap-1 capitalize'><BsDash />Smartphone</Link>
                    </li>
                    <li className="p-3  hover:bg-gray-300">
                        <Link href="/" className='text-black flex items-center justify-start gap-1 capitalize'><BsDash />Smartphone</Link>
                    </li>
                    <li className="p-3  hover:bg-gray-300">
                        <Link href="/" className='text-black flex items-center justify-start gap-1 capitalize'><BsDash />Smartphone</Link>
                    </li>
                    <li className="p-3  hover:bg-gray-300">
                        <Link href="/" className='text-black flex items-center justify-start gap-1 capitalize'><BsDash />Smartphone</Link>
                    </li>
                   
                  
                </ul>
            </div>

        </div>
    )

}


export default Sidebar;