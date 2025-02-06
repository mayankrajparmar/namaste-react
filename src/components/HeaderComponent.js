import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={LOGO_URL} alt="Logo" className="logo-img" />
    </div>

    <div className="nav-menu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </nav>
);

export default HeaderComponent;
