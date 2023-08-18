import Link from "next/link"
import { useRouter } from "next/router"
import { BiHome, BiRightArrow, BiLeftArrowCircle } from "react-icons/bi"


export const Breadcrump = ({title}) => {
    const router = useRouter();
    return (
        <div className=" bg-gray-50 drop-shadow w-full flex item-center justify-between my-2 text-gray-700">
            <div className="flex items-center gap-1">
                <div className="flex items-center mx-2">
                    <Link href="/"><BiHome size={28} /></Link>
                    <BiRightArrow size={15} />
                </div>
                <h4 className="text-center font-semibold py-2 uppercase">{title}</h4>
            </div>
            <div className="px-2 flex items-center">
                <Link href="#"><BiLeftArrowCircle size={28} onClick={() => router.back()} /></Link>
            </div>

        </div>
    )
}
