import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <span>My website</span>
      <div >
        <Link  to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
