import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const heading3 = React.createElement("h2", { id: "title3" }, "Helllooo");

// using React.createElement
// const container = React.createElement("div", { id: "container" }, [
//   React.createElement(
//     "h1",
//     { id: "title", className: "title" },
//     "Namaste World from parcel"
//   ),
//   React.createElement(
//     "h2",
//     { id: "title2", className: "title" },
//     "To Kaise Hai Aap Log"
//   ),
//   React.createElement("h2", { id: "title3", className: "title" }, "Helllooo"),
// ]);

// using jsx

// const heading = (
//   <div className="title">
//     <h1>hello</h1>
//     <h2>from</h2>
//     <h3>jsx</h3>
//   </div>
// );

// using functional component with jsx

// const TitleComponent = () => <h1>Hello From functional component</h1>;

// const HeadingComponent = () => (
//   <>
//     <TitleComponent />
//     <div className="title">
//       <h1>hello</h1>
//       <h2>from</h2>
//       <h3>jsx</h3>
//     </div>
//   </>
// );

const HeaderComponent = () => (
  <nav className="navbar">
    <div className="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        alt="Logo"
        className="logo-img"
      />
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-input" />
    </div>
    <div className="user-icon">
      <img
        src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png"
        alt="User Icon"
        className="user-img"
      />
    </div>
  </nav>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
// root.render(heading);
root.render(<HeaderComponent />);
