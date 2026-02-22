import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import TopRatedProducts from "../components/TopRatedProducts";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TopRatedProducts />
      <FeaturedCategories />
      <ContactSection />
    </div>
  );
};

export default HomePage;
