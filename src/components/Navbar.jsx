import logo from "../assets/VelouraLogo.jpg";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Veloura Logo" className="logo-img" />
      </div>

      <div className="search-bar">
        <span role="img" aria-label="search">
          🔍
        </span>
        <input type="text" placeholder="Search..." />
      </div>

      <div className="admin">
        <span className="admin-icon" role="img" aria-label="admin">
          👤
        </span>
        <span>Admin</span>
      </div>
    </nav>
  );
}
