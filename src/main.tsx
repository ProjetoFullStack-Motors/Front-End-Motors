import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CarProvider } from "./Providers";
import { UserProvider } from "./Providers";

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
