import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer/Footer"


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="md:w-4/5 w-full sm:mt-6 m-auto ">
                <div className="grid sm:grid-cols-5 grid-cols-1 gap-2 ">
                    <div className=" hidden sm:block " >
                        <Sidebar />
                    </div>

                    <section className="col-span-4 px-2 ">
                        {children}
                    </section>

                </div>
                <Footer/>
            </div>

        </>
    )
}

export default Layout