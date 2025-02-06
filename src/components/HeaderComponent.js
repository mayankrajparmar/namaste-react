import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  const [logStatus, setLogStatus] = useState("Login");
  return (
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
          <button
            onClick={() => {
              logStatus === "Login"
                ? setLogStatus("Logout")
                : setLogStatus("Login");
            }}
            className="log-button"
          >
            {logStatus}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;
