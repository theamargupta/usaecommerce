import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import  Auth0ProviderWithHistory  from "./auth/auth0Provider";
import "./styles/globals.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
  document.getElementById("root")
);
