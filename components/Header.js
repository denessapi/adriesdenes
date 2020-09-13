// React.
import React from "react";

// Twin macro.
import tw from "twin.macro";

// Shared components.
import Container from "./shared/Container";
import NavLink from "./shared/NavLink";

// Styled components
const HeaderRow = tw.div`
  pt-2
  w-full
  relative top-0 left-0
  bg-transparent
  z-30
`;

const HeaderContainer = tw(Container)`
  flex justify-between
`;

const NavContainer = tw.div`
  py-2
  w-full
  flex justify-center
`;

const NavItem = tw.div`
  px-2 py-2 md:py-1 lg:py-2 lg:px-2
  text-black font-cardo leading-5 text-center
  text-sm md:text-sm lg:text-base
`;

const NavBarContainer = tw.div`
  hidden md:flex md:flex-row md:justify-end
`;

const NavBar = () => (
  <NavBarContainer>
    <NavLink link="/">
      <NavItem>Nyitólap</NavItem>
    </NavLink>
    <NavLink link="/helyszin">
      <NavItem>Helyszín</NavItem>
    </NavLink>
    <NavLink link="/helyszin">
      <NavItem>Menetrend</NavItem>
    </NavLink>
    <NavLink link="/helyszin">
      <NavItem>Képek</NavItem>
    </NavLink>
    <NavLink link="/helyszin">
      <NavItem>GYIK</NavItem>
    </NavLink>
    <NavLink link="/helyszin">
      <NavItem>RSVP</NavItem>
    </NavLink>
  </NavBarContainer>
);

const Header = () => {
  // State hook
  return (
    <HeaderRow>
      <HeaderContainer>
        <NavContainer>
          <NavBar />
        </NavContainer>
      </HeaderContainer>
    </HeaderRow>
  );
};

export default Header;
