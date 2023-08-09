/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CarProvider } from "./Providers/CarContext/index.tsx";
import { UserProvider } from "./Providers/UserContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
