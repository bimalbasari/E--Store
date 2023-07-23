import Header from "./Header"
import Sidebar from "./Sidebar"


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="sm:w-4/5 w-full mt-6 m-auto ">
                <div className="grid sm:grid-cols-5 grid-cols-1 gap-3 ">
                    <div >
                        <Sidebar />
                    </div>

                    <section className="col-span-4  px-2 sm:px-1 ">
                        {children}
                    </section>

                </div>
            </div>

        </>
    )
}

export default Layout