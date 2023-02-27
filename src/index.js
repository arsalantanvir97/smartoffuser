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
import { QueryClient, QueryClientProvider } from "react-query";

import { ToastContainer } from "react-toastify";
export const queryClient = new QueryClient({defaultOptions:{queries:{staleTime:1000*60*10}}});


ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
        <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <App />
      </QueryClientProvider>
    </HttpsRedirect>
  </Provider>,
  document.getElementById("root")
);
