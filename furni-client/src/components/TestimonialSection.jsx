import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";

const testimonials = [
  {
    image: person1,
    name: "Maria Jones",
    position: "CEO, Co-Founder",
    text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  },
  {
    image: person2,
    name: "John Smith",
    position: "Interior Designer",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
  },
  {
    image: person3,
    name: "Emma Watson",
    position: "Customer",
    text: "Aliquam vulputate velit imperdiet dolor tempor tristique. Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-gray-100 hover:bg-[#3b5d50] hover:text-white transition flex items-center justify-center"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="flex-1 text-center transition-all duration-500">
            <p className="max-w-3xl mx-auto text-lg text-gray-500 leading-8">
              "{testimonials[current].text}"
            </p>

            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full object-cover mx-auto mt-8"
            />

            <h3 className="text-xl font-semibold mt-4">
              {testimonials[current].name}
            </h3>

            <p className="text-gray-500">{testimonials[current].position}</p>

            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    current === index ? "bg-[#3b5d50]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-gray-100 hover:bg-[#3b5d50] hover:text-white transition flex items-center justify-center"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
