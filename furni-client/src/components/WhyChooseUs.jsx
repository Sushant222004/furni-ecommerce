import WhyChooseUsImage from "../assets/images/why-choose-us-img.jpg";
import FeatureCard from "./FeatureCard";
import data from "../assets/data/data";
import dots from "../assets/images/download.svg";

function WhyChooseUs() {
  return (
    <section>
      <div className="flex flex-col md:flex-row max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-16 gap-12">
        <div className="flex flex-col gap-12">
          <div className="">
            <h2 className="pb-4 text-4xl font-semibold">Why Choose Us</h2>
            <p className="text-sm text-gray-400 max-w-180 ">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {data.Cards.map((card) => (
              <FeatureCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                about={card.about}
              />
            ))}
          </div>
        </div>

        <div className="relative ">
          <img
            className="w-full max-w-4xl  h-150 rounded-3xl relative z-10 "
            src={WhyChooseUsImage}
            alt="whychoose image"
          />

          <img
            className="-top-18 -left-22 absolute  w-60"
            src={dots}
            alt="dots image"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
