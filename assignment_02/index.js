import React from "react";
import ReactDOM from "react-dom/client";

// Using JavaScript
//     const heading = document.createElement("h1");
//     heading.innerHTML = "Namaste World";
//     const root = document.getElementById("root");
//     root.appendChild(heading);

// Using React
const heading = React.createElement(
  "h1",
  { id: "title" },
  "Namaste World from parcel"
);

const heading2 = React.createElement(
  "h2",
  { id: "title2" },
  "To Kaise Hai Aap Log"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
