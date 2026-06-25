import couch from "../assets/images/couch.png";
import dots from "../assets/images/download.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[#3b5d50]">
      <div className=" flex flex-col gap-6 lg:flex-row  py-8 lg:py-12 justify-between items-center max-w-339 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8  text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl lg:text-6xl font-bold text-white max-w-lg ">
            Modern Interior Design Studio
          </h1>
          <p className="text-gray-300 max-w-md text-sm">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/shop" className="bg-[#f9bf29] px-8 py-3 rounded-full">
              Shop Now
            </Link>

            <Link
              to="/about"
              className="border border-white/30 text-white px-8 py-3 rounded-full"
            >
              Explore
            </Link>
          </div>
        </div>

        <div className="relative z-10">
          <img
            src={couch}
            alt="Green couch"
            className="w-full max-w-2xl relative z-10"
          />
          <img
            className="absolute top-7 text-gray-300 w-70 -right-28 z-0 opacity-20"
            src={dots}
            alt="dots image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
