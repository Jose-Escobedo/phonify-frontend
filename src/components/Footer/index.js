import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaGithub,
  FaInstagram,
  FaMedium,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  WebsiteRights,
  SocialLogo,
  FooterImg,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/Login">How it works</FooterLink>
              <FooterLink to="/Login">Testimonials</FooterLink>
              <FooterLink to="/Login">Phone Reviews</FooterLink>
              <FooterLink to="/Login">Phone Repairs</FooterLink>
              <FooterLink to="/Login">Gallery</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/Login">How it works</FooterLink>
              <FooterLink to="/Login">Testimonials</FooterLink>
              <FooterLink to="/Login">Phone Reviews</FooterLink>
              <FooterLink to="/Login">Phone Repairs</FooterLink>
              <FooterLink to="/Login">Gallery</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Members</FooterLinkTitle>
              <FooterLink to="/Login">How it works</FooterLink>
              <FooterLink to="/Login">Testimonials</FooterLink>
              <FooterLink to="/Login">Phone Reviews</FooterLink>
              <FooterLink to="/Login">Phone Repairs</FooterLink>
              <FooterLink to="/Login">Gallery</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Our Team</FooterLinkTitle>
              <FooterLink to="/Login">How it works</FooterLink>
              <FooterLink to="/Login">Testimonials</FooterLink>
              <FooterLink to="/Login">Phone Reviews</FooterLink>
              <FooterLink to="/Login">Phone Repairs</FooterLink>
              <FooterLink to="/Login">Gallery</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Phonify
            </SocialLogo>
            <WebsiteRights>
              {`Phonify © ${new Date().getFullYear()} All rights reserved.`}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Medium">
                <FaMedium />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
