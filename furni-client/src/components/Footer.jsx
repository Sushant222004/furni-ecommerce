import sofa from "../assets/images/sofa.png";

const Company = ["About us", "Services", "Blog", "contact us"];
const Support = ["Support", "Knowledge base", "Live chat"];
const About = ["jobs", "Our team", "Leadership", "Privacy Policy"];
const Products = ["Nordic Chair", "Kruzo Aero", "Ergonomic Chair"];

import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiSend,
  FiMail,
} from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-16 gap-12">
        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <FiMail className="text-[#3b5d50] text-xl" />
              <h2 className="text-2xl font-semibold">
                Subscribe to Newsletter
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#3b5d50]"
                type="text"
                placeholder="Enter your name "
              />

              <input
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#3b5d50]"
                type="text"
                placeholder="Enter your email "
              />

              <button className="bg-[#3b5d50] text-white px-7 text-xl py-4 rounded-lg self-start">
                <FiSend />
              </button>
            </div>
          </div>
          <img src={sofa} alt="sofa" className="w-full max-w-sm" />
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-[#3b5d50]">Furni.</h2>
              <p className="text-gray-500 text-sm max-w-sm mt-6">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>
              <div className="flex gap-4 mt-8 text-green-900">
                <FiFacebook className="w-10 h-10 p-3 rounded-full bg-gray-100 hover:bg-[#3b5d50] hover:text-white cursor-pointer transition" />

                <FiTwitter className="w-10 h-10 p-3 rounded-full bg-gray-100 hover:bg-[#3b5d50] hover:text-white cursor-pointer transition" />

                <FiInstagram className="w-10 h-10 p-3 rounded-full bg-gray-100 hover:bg-[#3b5d50] hover:text-white cursor-pointer transition" />

                <FiLinkedin className="w-10 h-10 p-3 rounded-full bg-gray-100 hover:bg-[#3b5d50] hover:text-white cursor-pointer transition" />
              </div>
            </div>
            <ul className="space-y-4 text-gray-600">
              {Company.map((item) => (
                <li className="hover:text-black cursor-pointer" key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <ul className="space-y-4 text-gray-600">
              {Support.map((item) => (
                <li className="hover:text-black cursor-pointer" key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <ul className="space-y-4 text-gray-600">
              {About.map((item) => (
                <li className="hover:text-black cursor-pointer" key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <ul className="space-y-4 text-gray-600">
              {Products.map((item) => (
                <li className="hover:text-black cursor-pointer" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6 flex flex-col lg:flex-row justify-between gap-4">
          <p className="text-gray-500">Copyright ©2025. All Rights Reserved.</p>

          <div className="flex gap-6">
            <p className="text-gray-800" >Terms & Conditions</p>

            <p  className="text-gray-800">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
