import person from "../assets/images/person-1.png";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonials() {
  return (
    <section>
      <div className="max-w-200 mx-auto px-4 py-16">
        <div className="flex-1 text-center ">
          <div className="flex flex-col gap-8 w-full">
            <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <button className="w-14 h-14  flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#3b5d50] hover:text-white transition">
                <FiChevronLeft />
              </button>

              <div className="flex-1">
                <p className="max-w-3xl mx-auto text-lg text-gray-500 leading-8">
                  “Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Integer convallis volutpat
                  dui quis scelerisque.”
                </p>

                <div className="text-center mt-6 ">
                  <img
                    src={person}
                    alt="person"
                    className="rounded-full w-20 mx-auto"
                  />
                  <h3 className="font-semibold text-lg mt-4">Maria Jones</h3>

                  <p className="text-sm text-gray-500">CEO, Co-Founder</p>
                  <div className="flex justify-center gap-2 mt-6">
                    <span className="w-3 h-3 rounded-full bg-[#3b5d50] hover:bg-[#3b5d50] cursor-pointer transition"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#3b5d50] cursor-pointer transition"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#3b5d50] cursor-pointer transition"></span>
                  </div>
                </div>
              </div>
              <button className="w-14 h-14  flex items-center justify-center  rounded-full bg-gray-100 hover:bg-[#3b5d50] hover:text-white transition">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
