import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/" style={{ color: "#fff", textDecoration: "none", marginRight: "20px" }}>Home</Link>
      <Link to="/favorites" style={{ color: "#fff", textDecoration: "none" }}>Favorites</Link>
    </div>
  );
};

export default Navbar;
