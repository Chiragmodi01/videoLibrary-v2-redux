import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MainProvider } from "./helpers/context/main-context";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <MainProvider>
          <App />
        </MainProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
