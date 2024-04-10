import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./index.css";

import { createContext } from "react";

export const server = "http://127.0.0.1:4000/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <App />
    </Context.Provider>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <AppWrapper />
  </React.StrictMode>
);
