import Link from "next/link";
import { MdCategory } from "react-icons/md";
import { BsDash } from "react-icons/bs";
import useSwr from "swr";
import { fetcher } from "@/utils/swrFetcher";


const Sidebar = () => {
  const { data, error, isLoading } = useSwr(
    "https://dummyjson.com/products/categories",
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <div className="bg-gray-100 ">
        <ul className="divide-y divide-gray-400 rounded-md overflow-hidden">
          <li className="p-4 nav-top-bg font-bold ">
            <h5 className="text-white uppercase  flex items-center  justify-start gap-1">
              <MdCategory />
              Categories
            </h5>
          </li>
          {data && data?.map((category, i) => {
            return (
              <li key={i + category} className="p-3 text-sm hover:bg-gray-300">
                <Link
                  href={`/category/${category}`}
                  className="text-black flex items-center justify-start gap-1 capitalize"
                >
                  <BsDash size={24} />
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
