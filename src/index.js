import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";
import Login from "./components/Login";

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </React.Fragment>
  );
};

const Grocery = lazy(() => delayForDemo(import("./components/Grocery")));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
