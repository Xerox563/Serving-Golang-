import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "20px", background: "#111" }}>
      <Link
        to="/"
        style={{ color: "#fff", marginRight: "20px", textDecoration: "none" }}
      >
        Home
      </Link>

      <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
        About
      </Link>
    </div>
  );
}

export default Navbar;
