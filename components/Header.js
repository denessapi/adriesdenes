// React.
import React, { useEffect } from "react";

// Twin macro.
import tw from "twin.macro";
import { Transition } from "@tailwindui/react";
import _ from "lodash";

import HamburgerMenu from "react-hamburger-menu";

// Shared components.
import Container from "./shared/Container";
import NavBar from "./shared/NavBar";

const Caption = tw.div`
  pl-2
  text-center
  text-2xl
  font-marckscript
  md:hidden
`;

const NavContainer = tw.div`
  py-2
  w-full
  flex
  justify-center
`;

const Filler = tw.div`
  w-full
  pt-12
  lg:pt-24
  pb-3
  md:pb-1
  lg:pb-5
`;

const NavContainerFixed = tw.div`
  pb-2
  pt-4
  w-full
  flex
  justify-center
  bg-gray-100
  bg-opacity-100
  fixed
  top-0
  z-30
  border-b
  border-gray-600
`;

const NavBarContainer = tw.div`
  hidden md:flex md:flex-row md:justify-end
`;

const TopRow = tw.div`
  hidden md:block
  pl-2
  w-full
  top-0 left-0
  bg-transparent
  z-30
  text-center
  font-marckscript
  lg:text-4xl md:text-3xl text-2xl
`;

const BurgerContainer = tw.div`
  pt-6 pr-2 pl-4
  z-50
  md:hidden
  top-0 left-0
  absolute
`;

const BurgerMenuContainer = tw.div`
  pt-8
  flex flex-col items-center
`;

const HeaderRow = tw.div`
  w-full
  pt-2
  bg-transparent
  relative
  top-0 left-0
`;

const BurgerMenuStyle = tw.div`
   w-full h-full
   fixed top-0 left-0 z-40
   bg-gray-100
   overflow-y-scroll
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
    var throttled = _.throttle(handleScroll, 100);
    window.addEventListener("scroll", throttled);
    return () => window.removeEventListener("scroll", throttled);
  });

  let NavContainerContent = (
    <>
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
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
    </>
  );

  return (
    <HeaderRow>
      <Transition show={!scrolled}>
        <TopRow>
          <Transition.Child
            enter="transition-text duration-500"
            enterFrom="text-0"
            enterTo="lg:text-4xl md:text-3xl text-2xl"
            leave="transition-text duration-500"
            leaveFrom="lg:text-4xl md:text-3xl text-2xl"
            leaveTo="text-0"
          >
            Adri & Dénes
          </Transition.Child>
        </TopRow>
        <Transition.Child as={NavContainer}>
          {NavContainerContent}
        </Transition.Child>
      </Transition>
      <Transition show={scrolled}>
        <Transition.Child as={Filler}></Transition.Child>
        <Transition.Child as={NavContainerFixed}>
          {NavContainerContent}
        </Transition.Child>
      </Transition>
      <Transition as={BurgerMenuStyle} show={isOpen}>
        <BurgerMenuContainer>
          <NavBar />
        </BurgerMenuContainer>
      </Transition>
    </HeaderRow>
  );
};

export default Header;
