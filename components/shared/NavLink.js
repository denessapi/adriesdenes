import { PropTypes } from "react-proptypes";

// Link.
import Link from "next/link";

const NavLink = props => {
  const { children, link } = props;

  return (
    <div className="py-5 md:py-0 md:px-3 md:flex md:items-center lg:px-6">
      <Link href={link}>{children}</Link>
    </div>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
};

export default NavLink;
