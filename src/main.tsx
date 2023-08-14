import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider, CarProvider, UserProvider } from "./Providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ModalProvider>
                <CarProvider>
                    <UserProvider>
                        <App />
                    </UserProvider>
                </CarProvider>
            </ModalProvider>
        </BrowserRouter>
    </React.StrictMode>
);
