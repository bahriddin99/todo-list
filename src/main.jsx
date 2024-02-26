import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { strog } from "./redux/storg.js";
import  "/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={strog}>
    <App />
  </Provider>
);
