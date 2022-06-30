import React, { useEffect, useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavImg,
  CartBtnLink,
} from "./NavbarElements";
const logo = require("../../images/logo.svg").default;
const Navbar = ({ toggle, cartBadge, setCartItems, cartPhones }) => {
  useEffect(() => {
    setCartItems(cartPhones.length);
  }, [cartPhones]);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavImg src={logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="TestimonialsSection"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Testimonials
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={"true"}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="phone-card"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Phones
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <CartBtnLink to="/Cart">
              <FaShoppingCart className="shopping-cart" />
              {cartBadge ? (
                <span className="badge badge-warning" id="lblCartCount">
                  {cartBadge}
                </span>
              ) : (
                ""
              )}
            </CartBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
