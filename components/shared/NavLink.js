import { PropTypes } from "react-proptypes";

// Link.
import Link from "next/link";
import tw from "twin.macro";

const NavWrapper = tw.div`
  py-5
  md:py-0 md:px-3 md:flex md:items-center
  lg:px-6
  cursor-pointer
`;

const NavLink = props => {
  const { children, link } = props;

  return (
    <NavWrapper>
      <Link href={link}>{children}</Link>
    </NavWrapper>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
};

export default NavLink;
