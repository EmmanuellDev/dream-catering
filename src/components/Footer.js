import React from "react";
import { 
  FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, 
  FaMapMarkerAlt, FaPhone, FaEnvelope 
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import logo from "../requirements/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#951F44] text-white py-6 overflow-hidden">
    <div className="animate-marquee flex items-center lg:text-4xl text-2xl">
      <div className="flex space-x-4">
        <span className="flex-shrink-0 aclonica-regular">
          Wedding Event <span className="mx-4">•</span>
          60th Wedding Event <span className="mx-4">•</span>
          Engagement <span className="mx-4">•</span>
          Seemantham <span className="mx-4">•</span>
          Birthday Party <span className="mx-4">•</span>
          House Warming <span className="mx-4">•</span>
          Mehndi Function <span className="mx-4">•</span>
          Corporate Events <span className="mx-4">•</span>
          Retirement Function <span className="mx-4">•</span>
        </span>
        <span className="flex-shrink-0 aclonica-regular">
          Wedding Event <span className="mx-4">•</span>
          60th Wedding Event <span className="mx-4">•</span>
          Engagement <span className="mx-4">•</span>
          Seemantham <span className="mx-4">•</span>
          Birthday Party <span className="mx-4">•</span>
          House Warming <span className="mx-4">•</span>
          Mehndi Function <span className="mx-4">•</span>
          Corporate Events <span className="mx-4">•</span>
          Retirement Function <span className="mx-4">•</span>
        </span>
        <span className="flex-shrink-0 aclonica-regular">
          Wedding Event <span className="mx-4">•</span>
          60th Wedding Event <span className="mx-4">•</span>
          Engagement <span className="mx-4">•</span>
          Seemantham <span className="mx-4">•</span>
          Birthday Party <span className="mx-4">•</span>
          House Warming <span className="mx-4">•</span>
          Mehndi Function <span className="mx-4">•</span>
          Corporate Events <span className="mx-4">•</span>
          Retirement Function <span className="mx-4">•</span>
        </span>
      </div>
    </div>
  </div>

      <div className="bg-black text-white py-8 md:py-12">
        <div className="max-w-full mx-auto px-4 md:px-14 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-6">
            <img src={logo} alt="Emma Catering" className="h-20 md:h-16 w-33" />
            <p className="lg:text-xl md:text-2xl libre-baskerville-text text-center md:text-left px-4 md:px-0">
              Let Emma Catering transform your special occasion into a masterpiece with our professional touch.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {['FaFacebookF', 'FaInstagram', 'FaYoutube', 'FaWhatsapp'].map((icon, index) => (
                <a 
                  key={index} 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-700 text-white text-xl md:text-2xl hover:border-2 hover:border-white hover:bg-[#E9b472] transition-all"
                >
                  {icon === 'FaFacebookF' && <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>}
                  {icon === 'FaInstagram' && <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                  {icon === 'FaYoutube' && <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>}
                  {icon === 'FaWhatsapp' && <a href="https://wa.me/9994873204" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>}
                </a>
              ))}
            </div>
          </div>

        <div className="lg:w-1/3 pl-4">
          <h3 className="lg:text-4xl text-3xl mb-3 pb-6 aclonica-regular">Our Services</h3>
          <div className="grid lg:grid-cols-2 lg:gap-6 libre-baskerville-text justify-center lg:text-xl text-lg space-y-4">
            <div>
              <p><MdArrowForward className="inline text-[#E9b472]" /> Wedding Event</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> 60th Wedding</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Engagement</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Seemantham</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Birthday Party</p>
            </div>
            <div>
              <p><MdArrowForward className="inline text-[#E9b472]" /> House Warming</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Mehndi Function</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Corporate Events</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Retirement Event</p>
            </div>
          </div>
        </div>

          <div className="w-full md:w-1/3 pl-6 md:pl-0 space-y-6">
            <h3 className="text-3xl md:text-4xl aclonica-regular">Contact Now</h3>
            <div className="space-y-6 ">
              {[
                { icon: <FaMapMarkerAlt />, content: "No.29/484, 23rd Main Road, Arullappan Street, G.K.M Colony, Chennai - 600 082.", type: "text" },
                { icon: <FaPhone />, content: "+91 99948 73204", type: "phone" },
                { icon: <FaEnvelope />, content: "emmanuelsk04@gmail.com", type: "email" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#E9b472] text-black text-xl">
                    {item.icon}
                  </span>
                  {item.type === "text" ? (
                    <span className="text-white text-lg md:text-xl libre-baskerville-text">{item.content}</span>
                  ) : (
                    <a 
                      href={item.type === "phone" ? `tel:${item.content}` : `mailto:${item.content}`}
                      className="text-white hover:text-teal-400 text-lg md:text-xl libre-baskerville-text"
                    >
                      {item.content}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-gray-200 text-xs md:text-sm mt-8 px-4 md:px-14">
          <div className="md:hidden text-center flex flex-col space-y-2">
            <span>© 2024 <span className="font-bold text-lg">EMMA CATERINGS.</span> All rights reserved</span>
            <span>Designed By <span className="text-[#E9b470] text-lg aclonica-regular">Team Fortiv.</span></span>
          </div>
          
          <div className="hidden md:block text-left">
            © 2024 <span className="font-bold text-lg">EMMA CATERINGS.</span> All rights reserved | Designed By <span className="text-[#E9b470] text-lg font-bold aclonica-regular">Team Fortiv.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;