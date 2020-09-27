import tw from "twin.macro";

import NavLink from "./NavLink";

const NavItem = tw.div`
  px-2 py-2 md:py-1 lg:py-2 lg:px-2
  text-black font-cardo leading-5 text-center
  text-base md:text-base lg:text-xl
`;

const NavBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavBar;
