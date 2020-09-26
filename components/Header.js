// React.
import React, { useEffect } from "react";

// Twin macro.
import tw from "twin.macro";
import styled from "@emotion/styled";

import HamburgerMenu from "react-hamburger-menu";

// Shared components.
import Container from "./shared/Container";
import NavBar from "./shared/NavBar";
import NavLink from "./shared/NavLink";

// Styled components
const TopRow = styled.div`
  ${tw`
    hidden md:block
    pl-2
    w-full
    top-0 left-0
    bg-transparent
    z-30
    text-center
    lg:text-4xl
    md:text-3xl
    text-2xl
    font-marckscript
  `}
  transition: font-size 0.4s ease-in
`;

const Caption = tw.div`
  pl-2
  text-center
  text-2xl
  font-marckscript
  md:hidden
`;

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
  text-base md:text-base lg:text-xl
`;

const BurgerContainer = tw.div`
    pt-6 pr-2 pl-4
    z-50
    md:hidden
    top-0 left-0
    absolute
  `;

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const topStyle = scrolled ? { fontSize: 0, opacity: 0 } : {};
  const headerStyle = scrolled
    ? {
        backgroundColor: "#f7fafc",
        backgroundOpacity: 0.5,
        borderBottom: "1px #383838 solid",
        position: "fixed"
      }
    : {};

  const BurgerMenuContainer = tw.div`
    pt-8
    flex flex-col items-center
  `;

  const BurgerMenuStyle = isOpen
    ? tw.div`
          w-full h-full
          fixed top-0 left-0 z-40
          bg-gray-100
          overflow-y-scroll
      `
    : tw.div`
        hidden
      `;

  const BurgerMenu = () => (
    <BurgerMenuStyle>
      <BurgerMenuContainer>
        <NavLink link="/">
          <NavItem>Nyitólap</NavItem>
        </NavLink>
        <NavLink link="/helyszin">
          <NavItem>Helyszín</NavItem>
        </NavLink>
        <NavLink link="/menetrend">
          <NavItem>Menetrend</NavItem>
        </NavLink>
        <NavLink link="/kepek">
          <NavItem>Képek</NavItem>
        </NavLink>
        <NavLink link="/gyik">
          <NavItem>GYIK</NavItem>
        </NavLink>
        <NavLink link="/rsvp">
          <NavItem>RSVP</NavItem>
        </NavLink>
      </BurgerMenuContainer>
    </BurgerMenuStyle>
  );

  // State hook
  return (
    <HeaderRow style={headerStyle}>
      <TopRow style={topStyle}>Adri & Dénes</TopRow>
      <HeaderContainer>
        <NavContainer>
          <BurgerContainer>
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={() => setIsOpen(!isOpen)}
              width={18}
              height={13}
              animationDuration={0.5}
              color="black"
              strokeWidth={2}
            />
          </BurgerContainer>
          <Caption>Adri & Dénes</Caption>
          <NavBar />
        </NavContainer>
      </HeaderContainer>
      <BurgerMenu />
    </HeaderRow>
  );
};

export default Header;
