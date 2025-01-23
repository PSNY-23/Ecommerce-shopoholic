import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='flex flex-col justify-between w-48 h-72 bg-gray-100'>
        <div className='overflow-hidden'>
          <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt='' />
        </div>
        <div className=''>
          <p className=' text-sm ml-2'>{name}</p>
          <div className='flex justify-end  items-center pb-2 px-2'>
            <p className='text-sm font-semibold bg-pink-300 text-white rounded-md px-2 py-1'>68% off</p>
            <p className='text-sm font-bold'>
              {currency}
              {price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
