import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            The best collection of clother, to beautify your wardrobe.Be it the
            summer, winter or party wear we have it all, choose from the comfort
            of your home, and rest assure for the product delivery. We have the
            best support team, we are just a call away.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-999-999-9999</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-600">
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@foreveryou.com - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
