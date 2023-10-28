import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./Style/main.css";
import { MyProvider } from "./Context/createcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyProvider>
        <App />
      </MyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
