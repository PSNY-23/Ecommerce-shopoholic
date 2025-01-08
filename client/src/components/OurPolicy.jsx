import { assets } from "../assets/assets"

const OurPolicy = () => {
  return (
      <div className="flex justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
          <div>
              <img src={assets.exchange_icon} className=" w-1/4 sm:w-1/3  m-auto mb-5" alt="" />
              <p className="font-semibold">Easy Exchange Policy</p>
              <p className="text-gray-400">We offer hassel free exchange policy.</p>
          </div>
          <div>
              <img src={assets.quality_icon} className="w-1/4 sm:w-1/3 m-auto mb-5" alt="" />
              <p className="font-semibold">7 Day Return Policy</p>
              <p className="text-gray-400">We provide 7 day return policy.</p>
          </div>
          <div>
              <img src={assets.support_img} className="w-1/4 sm:w-1/3 m-auto mb-5" alt="" />
              <p className="font-semibold">Best Custormer Support</p>
              <p className="text-gray-400">We provide 24x7 customer support.</p>
          </div>
    </div>
  )
}

export default OurPolicy