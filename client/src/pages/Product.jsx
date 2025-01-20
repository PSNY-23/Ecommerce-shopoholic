import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const navigate = useNavigate()

  const fetchProductData = async () => {
    let [data] = await products.filter((item) => item._id === productId);
    
    data.sizes = JSON.parse(data.sizes[0])
    setProductData(data);
    setImage(data.image[0]);
  };

  useEffect(() => {
    fetchProductData();
  },[productId]);
   

  return (
    <>
      {productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100">
          {/* Product Data */}
          <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
            {/* Product Images */}
            <div className=" flex flex-1 flex-col-reverse gap-3 sm:flex-row">
              <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                {productData.image.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      alt=""
                      className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                      onClick={() => setImage(item)}
                    />
                  );
                })}
              </div>
              <div className="w-full sm:w-[80%]">
                <img src={image} className="w-full h-auto" alt="" />
              </div>
            </div>
            {/* Product Info */}
            <div className="flex-1">
              <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
              <div className="flex items-center gap-1 mt-2">
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className="pl-2">(122)</p>
              </div>
              <p className="mt-5 text-3xl font-medium">
                {currency}
                {productData.price}
              </p>
              <p className="mt-5 text-gray-500 md:w-4/5">
                {productData.description}
              </p>
              <div className="flex flex-col gap-4 my-8">
                <p>Select Size</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`border py-2 px-4 bg-gray-100 ${
                        item === size ? "border-orange-500" : ""
                      }`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={()=> addToCart(productData._id, size, navigate)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                ADD TO CART
              </button>
              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original Product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy exchange and return policy within 7 days.</p>
              </div>
            </div>
          </div>
          {/* Description and review section */}
          <div className="mt-20">
            <div className="flex">
              <b className="border px-5 py-3 text-sm">Description</b>
              <p className="border px-5 py-3 text-sm">Reviews (122)</p>
            </div>
            <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                delectus quibusdam facilis, culpa sequi nostrum repudiandae
                eveniet veniam unde architecto deserunt commodi soluta adipisci
                a optio sapiente blanditiis eum. Amet dolorum eligendi doloribus
                minus quas minima nihil excepturi asperiores quisquam numquam
                vero, dicta unde nisi quod, similique in velit consectetur?
                Quasi exercitationem id ullam magnam vel nemo eos suscipit nisi
                at distinctio inventore eaque alias laborum, fugiat dolorem
                repellendus libero ratione. Animi libero deserunt labore,
                commodi laboriosam quibusdam in ullam saepe nulla deleniti ea
                voluptatem distinctio culpa ut fuga veritatis. Corporis eum
                maxime perspiciatis officiis, harum totam eligendi corrupti
                porro.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum maiores ducimus rerum praesentium eaque? Laborum, sequi
                recusandae. Eligendi, sed voluptatem!
              </p>
            </div>
          </div>
          {/* display related products */}
          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        </div>
      ) : (
        <div className="opacity-0"></div>
      )}
    </>
  );
};

export default Product;
