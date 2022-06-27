import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkR,
  SideBtnWrap,
  SidebarImg,
  SidebarLogo,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const logo = require("../../images/logo.svg").default;

  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="TestimonialsSection" onClick={toggle}>
            Testimonials
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="phone-card" onClick={toggle}>
            Phones
          </SidebarLink>
          <SidebarLinkR to="/Cart" onClick={toggle}>
            Cart
          </SidebarLinkR>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarLogo to="home" onClick={toggle}>
            <SidebarImg src={logo} />
          </SidebarLogo>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
