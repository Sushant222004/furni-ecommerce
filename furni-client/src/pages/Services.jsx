import FeatureCard from "../components/FeatureCard";
import data from "../assets/data/data";
import ProductSection from "../components/ProductSection";
import Testimonials from "../components/TestimonialSection";
import Hero from "../components/Hero";

function Services() {
  return (
    <div>
      <Hero />
      <div className="max-w-339 mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold">Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-32">
          {data.Cards.map((card) => (
            <FeatureCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              about={card.about}
            />
          ))}
        </div>

        <ProductSection />
        <Testimonials />
      </div>
    </div>
  );
}

export default Services;
