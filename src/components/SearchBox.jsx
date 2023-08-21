import { useContext, useState } from "react"
import { useRouter } from "next/router";
import { GlobalData } from "@/pages/_app";
import Link from "next/link"
import Image from "next/image";

const SearchBox = () => {
    const { products } = useContext(GlobalData)
    const [searchValue, setSearchValue] = useState();
    const router = useRouter()

    const handleSearch = () => {
        router.push(`/search/${searchValue}`)
        setSearchValue()
    }

    return (
        <>
            <div className="flex gap-1 items-center rounded-md overflow-hidden w-full">
                <input
                    type="text"
                    className="h-8 w-auto outline-none px-2 rounded-md"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="border border-gray-300 rounded-md bg-white h-8 px-1 font-semibold text-blue-600  " onClick={handleSearch}>
                    Search
                </button>
            </div>
            {searchValue && <div className="absolute bg-white z-40 sm:w-1/4 w-3/4 p-4 drop-shadow-md">
                {searchValue && products?.filter(item => item.title.toLowerCase().includes(searchValue?.toLowerCase())).map((item) => (
                    < div key={item.id} className="flex gap-2 items-center border-b w-full  p-2">
                        <Image src={item.thumbnail} height={50} width={50} alt="Image" className="h-8 w-8 rounded-full" />
                        <Link href={`/product/${item.id}`} onClick={() => setSearchValue()}>
                            {item.title}
                        </Link>
                    </div >)
                )
                }
            </div>}
        </>
    );
};


export default SearchBox