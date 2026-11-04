import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import "./bootstrap";

const root = document.getElementById("app");

if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </React.StrictMode>
    );
}