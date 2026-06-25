import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/TestimonialSection";
import data from "../assets/data/data";
import TeamCard from "../components/TeamCard";
import Hero from "../components/Hero";

function About() {
  return (
    <div>
      <Hero />
      <div className="max-w-339 mx-auto px-6 py-16">
        <WhyChooseUs />

        <div className="py-38">
          <h2 className="text-4xl font-semibold text-center"> Our Team </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {data.Teams.map((team) => (
              <TeamCard
                key={team.id}
                image={team.image}
                name={team.name}
                position={team.position}
                about={team.about}
              />
            ))}
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  );
}

export default About;
