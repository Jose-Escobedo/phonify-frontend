import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Phones from "../components/Phones/Phones";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import { TestimonialsSectionData } from "../components/TestimonialsSection/TestimonialsSectionData";
import { aboutObj, signupObj } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = ({
  isOpen,
  toggle,
  phones,
  handleQuantityAdd,
  setIsAuthenticated,
  setUser,
  user,
  cartPhones,
  cartQuantity,
  setCartPhones,
  setCartQuantity,
  cartBadge,
}) => {
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        user={user}
        cartBadge={cartBadge}
        setUser={setUser}
        setIsAuthenticated={setIsAuthenticated}
      />

      <HeroSection />
      <InfoSection {...aboutObj} />
      <TestimonialsSection {...TestimonialsSectionData} />
      <Services />
      <Phones phones={phones} handleQuantityAdd={handleQuantityAdd} />
      <InfoSection {...signupObj} />
      <Footer />
    </>
  );
};

export default Home;
