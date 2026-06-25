import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HelpSection from "../components/HelpSection";
import PopularProducts from "../components/PopularProducts";
import Testinomials from "../components/TestimonialSection";
import BlogSection from "../components/BlogSection";

function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <WhyChooseUs />
      <HelpSection />
      <PopularProducts />
      <Testinomials />
      <BlogSection />
    </>
  );
}

export default Home;
