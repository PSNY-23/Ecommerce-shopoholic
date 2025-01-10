import { assets } from "../assets/assets";
import Title from "../components/Title";
import {NewsletterBox} from "../components/NewsletterBox"
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"Us"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Forever was bord out of a passion for innovation and desire for to revolutionaize Lorem ipsum dolor sit,amet
            consectetur adipisicing elit. Provident deleniti recusandae fugit deserunt!
          </p>
          <p>
            Since our inception Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste recusandae doloribus
            velit voluptatem vero. Consequuntur quas a beatae. Minus, eveniet.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to provide most trendy and fashionable clothes to all those who cant afford the expensive
            one.
          </p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, doloremque. Alias, dolorum repellendus!
            Animi exercitationem laborum praesentium, necessitatibus et mollitia magnam sapiente dolorum aut sed!
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, doloremque. Alias, dolorum repellendus!
            Animi exercitationem laborum praesentium, necessitatibus et mollitia magnam sapiente dolorum aut sed!
          </p>
          
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional customer services:</b>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, doloremque. Alias, dolorum repellendus!
              Animi exercitationem laborum praesentium, necessitatibus et mollitia magnam sapiente dolorum aut sed!
            </p>
          </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
