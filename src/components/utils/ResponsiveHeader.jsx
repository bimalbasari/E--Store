import { useState } from "react"
import Sidebar from "../layout/Sidebar"
import { AboutUs, MyAccount, MyCart, Store, Support } from "./Navbar_Items"

// This Nav Layout for small devices

const ResponsiveHeader = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className='w-full h-auto bg-transparent absolute z-40 sm:hidden'>

      {sidebar ? <Sidebar /> : <div className="bg-blue-500 mx-4 rounded">

        <ul className="divide-y divide-gray-400 rounded-md overflow-hidden text-white font-semibold">

          <li className="p-3  hover:bg-blue-400">
            <MyAccount />
          </li>

          <li className="p-3  hover:bg-blue-400">
            <MyCart />
          </li>
          <li className="p-3  hover:bg-blue-400">
            <div onClick={() => setSidebar(!sidebar)}>
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
      </div>}

    </div >
  )
}

export default ResponsiveHeader
