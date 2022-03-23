import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "react-datepicker/dist/react-datepicker.css";
import HttpsRedirect from "react-https-redirect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <ToastContainer />
      <App />
    </HttpsRedirect>
  </Provider>,
  document.getElementById("root")
);
