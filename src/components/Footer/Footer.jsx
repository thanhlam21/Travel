import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/video-2.mp4";
import { Link } from "react-router-dom";

const agency = [
  { link: "/services", title: "Services" },
  { link: "/insurance", title: "Insurance" },
  { link: "/contact-us", title: "Contact Us" },
  { link: "/agency", title: "Agency" },
  { link: "/tourism", title: "Tourism" },
];

const additionalLinks = [
  { link: "/booking", title: "Booking" },
  { link: "/rental-car", title: "RentalCar" },
  { link: "/hostel-world", title: "HostelWorld" },
  { link: "/trivago", title: "Trivago" },
  { link: "/trip-advisor", title: "TripAdvisor" },
];
const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/40 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[60px]" />
                {/* TravelloGo */}
              </h1>
              <p className="text-sm ">
                Travel broadens horizons, ignites passions, and creates
                unforgettable memories. From breathtaking landscapes to vibrant
                cultures, every journey offers a new perspective. Embrace the
                adventure and let travel inspire your soul.
              </p>
              <br />
              <div className="flex items-center gap-3 ">
                <FaLocationArrow />
                <p>lamnguyen21.dev@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>0968980307</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="https://www.facebook.com/lamnguyen.dev">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="https://www.linkedin.com/in/l%C3%A2m-nguy%E1%BB%85n-th%C3%A0nh-7ba651301/">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    OUR AGENCY
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {agency.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    PARTNERS
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    {additionalLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    LAST MINUTE
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
              Travel 2024 || Made with ❤️ by lamnguyen21.dev@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
