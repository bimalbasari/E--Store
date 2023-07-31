import Image from "next/image";
import Link from "next/link";
import { BiRupee, BiCartAdd } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { TbBrandAdobe } from "react-icons/tb";

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className="bg-gray-100 w-full border rounded-lg shadow-lg overflow-hidden pb-2 relative">
      <div className="absolute bg-sky-400 text-white text-xs font-thin rounded p-1 capitalize ">
        {item.category}
      </div>

      <Link href="#">
        <div className="object-cover">
          <Image
            src={item.thumbnail}
            width={100}
            height={80}
            alt={item.title}
            className="w-full h-36 "
          />
        </div>
      </Link>

      <div className=" w-full flex flex-col p-2 ">
        <Link href="#" className="mb-1">
          <h5 className="text-xs font-semibold">
            {item.title.length >= 25
              ? `${item.title.substring(0, 25)}...`
              : item.title}
          </h5>
        </Link>
        {/* Stock  */}
        {item.stock >= 50 ? (
          <span className="text-xs text-blue-600">{item.stock} left</span>
        ) : (
          <span className="text-red-400 text-xs">
            hurry up only {item.stock} left
          </span>
        )}
      </div>
      {/* Price Section */}
      <div className="flex items-center gap-3">
        <h6 className="flex items-center gap-0">
          <BiRupee size={20} />
          {item.price}
        </h6>

        <p className="flex items-center gap-0 font-thin text-gray-600 line-through decoration-slate-500">
          <BiRupee size={20} />

          {/* beforeDiscountPrice function
           *1st arg discunt %
           *2nd arg current Price
           */}
          {beforeDiscoutPrice(item.discountPercentage, item.price)}
        </p>
        <p className="font-semibold text-xs text-blue-500">
          {item.discountPercentage}% off
        </p>
      </div>

      {/*  Rating And Brand */}

      <div className="m-1">
        <p className="flex items-center gap-1 text-xs">
          Rating :
          <span className="flex items-center bg-green-600 text-white text-xs p-1 gap-1 w-fit rounded">
            {item.rating}
            <AiFillStar size={15} />
          </span>
        </p>

        <p className="flex items-center bg-white text-emerald-600 text-xs p-2 m-1 font-extrabold gap-1 w-fit rounded my-1">
          <TbBrandAdobe size={18} className="text-yellow-500 font-extrabold" />
          {item.brand}
        </p>
      </div>

      <div className="mx-2 my-2 p-1">
        {/* AddCart & Buy button */}

        <div className="flex items-center gap-2 text-white justify-end ">
          <Link href="#" className="bg-yellow-500 px-2 py-1 rounded ">
            <BiCartAdd size={22} />
          </Link>

          <Link href="#" className="bg-green-500 p-1 rounded">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

const beforeDiscoutPrice = (discountPercentage, price) => {
  let discount = 100 - parseInt(discountPercentage);
  return Math.round((100 / discount) * parseInt(price));
};

export default ProductCard;
