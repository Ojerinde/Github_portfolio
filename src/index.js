import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import DataContextProvider from "./store/DataContext";

// SEO third party package
import { HelmetProvider } from "react-helmet-async";

import "./Stylesheets/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </DataContextProvider>
  </BrowserRouter>
);
