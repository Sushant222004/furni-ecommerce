import grid1 from "../assets/images/img-grid-1.jpg";
import grid2 from "../assets/images/img-grid-2.jpg";
import grid3 from "../assets/images/img-grid-3.jpg";
import {Link} from "react-router-dom"

const features = [
  "Donec vitae odio quis nisl dapibus malesuada",
  "Donec vitae odio quis nisl dapibus malesuada",
  "Donec vitae odio quis nisl dapibus malesuada",
  "Donec vitae odio quis nisl dapibus malesuada",
];

function HelpSection() {
  return (
    <section>
      <div className=" flex flex-col lg:flex-row gap-25 max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-16 ">
        <div className="relative lg:w-1/2 min-h-150">
          <img src={grid1} alt="grid1" className="w-[75%] rounded-3xl" />

          <img
            src={grid2}
            alt="grid2"
            className="absolute top-0 -right-20 w-[35%] rounded-3xl"
          />

          <img
            src={grid3}
            alt="grid3"
            className="absolute -bottom-20 -right-20 w-[60%] rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-3xl font-semibold">
              We Help You Make Modern Interior Design
            </h2>
            <p className="text-gray-500">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-500">
              {features.map((feature, index) => (
                <li className="flex items-start gap-2" key={index}>
                  <span>•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to = "/blog" className="self-start px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-black">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>  
  );
}

export default HelpSection;
