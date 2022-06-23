import React, { useEffect, useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import { ButtonTag } from "../ButtonElements";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavImg,
  CartBtnLink,
  NavBtnLinkClear,
} from "./NavbarElements";
const logo = require("../../images/logo.svg").default;
const Navbar = ({ toggle, cartBadge, user, setUser, setIsAuthenticated }) => {
  const logout = () => {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
    }).then(() => {
      setIsAuthenticated(false);
      setUser(null);
    });
  };

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
                smooth={true}
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
            {user ? (
              <NavItem>
                <NavBtnLinkClear to="/orders">Orders</NavBtnLinkClear>
              </NavItem>
            ) : (
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            )}
          </NavMenu>
          <NavBtn>
            {user ? (
              <ButtonTag onClick={logout}>Logout</ButtonTag>
            ) : (
              <NavBtnLink to="/Login">Login</NavBtnLink>
            )}
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
