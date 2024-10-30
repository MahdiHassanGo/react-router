import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav>
      <span>My website</span>
      <div >
        <Link  to="/">Home</Link>
        
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
      </div>
    </nav>
  );
};

export default Header;
