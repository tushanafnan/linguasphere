import AboutSection from "../components/AboutSection";
import CtaSection from "../components/CtaSection";
import ServiceSection from "../components/FeatureSection";
import Hero from "../components/Hero";
import PlansSection from "../components/PlansSection";

const Home = () => {
  return (
    <div className='font-sans text-gray-800'>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Plans Section */}
      <PlansSection />

      {/* Feature Section */}
      <ServiceSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Home;
