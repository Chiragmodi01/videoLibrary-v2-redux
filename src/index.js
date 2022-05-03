import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MainProvider } from "./helpers/context/main-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
