import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <span>My website</span>
      <div className="flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
