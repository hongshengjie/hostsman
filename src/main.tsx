import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

import { watch, watchImmediate } from "tauri-plugin-fs-watch-api";

// can also watch an array of paths
const stopWatching = await watchImmediate(
  "/Users/hongshengjie/web/hostsman/README.md",
  {  },
  (event) => {
    console.log(event)
  }
);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
