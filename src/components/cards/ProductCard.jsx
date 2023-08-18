import Image from "next/image";
import Link from "next/link";
import { BiRupee, BiCartAdd } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TbBrandAdobe, TbStarHalfFilled } from "react-icons/tb";
import { addToCart } from "@/utils/CartItesms";
import { toast } from "react-hot-toast";

const ProductCard = ({ item }) => {
  return (
    <div className="bg-gray-100 w-full border rounded-lg shadow-lg overflow-hidden pb-2 relative">
      <div className="absolute bg-sky-400 text-white text-xs font-thin rounded p-1 capitalize ">
        {item.category}
      </div>

      <Link href={`/product/${item.id}`}>
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
        <Link href={`/product/${item.id}`} className="mb-1">
          <h5 className="text-xs font-semibold">
            {item.title.length >= 25
              ? `${item.title.substring(0, 25)}...`
              : item.title}
          </h5>
        </Link>

        {/* Stock  */}
        <small>
          {item.stock >= 50 ? (
            <span className="text-sm  text-green-600">{item.stock} left</span>
          ) : item.stock >= 10 ? (
            <span className="text-blue-600 text-sm">
              only {item.stock} left
            </span>
          ) : (
            <span className="text-red-400 text-sm">
              hurry up only {item.stock} left
            </span>
          )}
        </small>
      </div>

      {/*  Rating And Brand */}

      <div className="m-1">
        <p className="flex items-center gap-1 my-1 " title={item.rating}>
          {Array.from({ length: 5 }, (empty, index) => {
            let number = index + 0.5;
            return (
              <span key={index + "star"}>
                {item.rating >= index + 1 ? (
                  <AiFillStar className="text-yellow-500" />
                ) : item.rating >= number ? (
                  <TbStarHalfFilled className="text-yellow-500" />
                ) : (
                  <AiOutlineStar className="text-yellow-500" />
                )}
              </span>
            );
          })}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-3">
          <h6 className="flex items-center gap-0">
            Price: <BiRupee size={20} />
            {item.price}
          </h6>

          <p className="flex items-center gap-0  text-gray-600 line-through decoration-slate-500">
            <BiRupee size={20} className="text-gray-500 " />

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

        <p className="flex items-center bg-white text-emerald-600 text-xs p-2 m-1 font-extrabold gap-1 w-fit rounded my-1">
          <TbBrandAdobe size={18} className="text-yellow-500 font-extrabold" />
          {item.brand}
        </p>
      </div>

      <div className="mx-2 my-2 p-1">
        {/* AddCart & Buy button */}

        <div className="flex items-center gap-2 text-white justify-end ">
          <button
            className="bg-yellow-500 px-2 py-1 rounded "
            onClick={() => {
              addToCart(item, 1);
              toast.success("Item add in cart");
            }}
          >
            <BiCartAdd size={22} />
          </button>

          <Link
            href={`/product/${item.id}`}
            className="bg-green-500 p-1 rounded"
          >
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
