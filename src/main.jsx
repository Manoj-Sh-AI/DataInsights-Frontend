import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./index.css";

import { createContext } from "react";

export const server = "https://data-insights-backend.vercel.app/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState({});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setIsLoading,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
