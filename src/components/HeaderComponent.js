import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  if (sessionStorage.getItem("values") != null) {
    setIsLoggedin(true);
    sessionStorage.removeItem("values");
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={LOGO_URL} alt="Logo" className="logo-img" />
        </Link>
      </div>

      <div className="nav-menu">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact
            </Link>
          </li>
          <li>Cart</li>
          <li>
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;
