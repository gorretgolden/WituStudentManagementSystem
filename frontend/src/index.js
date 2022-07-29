
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// React Context Provider
import { MaterialUIControllerProvider } from "./context";

ReactDOM.render(
  // <BrowserRouter>
  //   <MaterialUIControllerProvider>
  //     <App />
  //   </MaterialUIControllerProvider>
  // </BrowserRouter>,
  <App/>,
  document.getElementById("root")
);
