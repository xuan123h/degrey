import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Thư viện react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Thư viện remix icon
import "remixicon/fonts/remixicon.css";
// React-router-dom
import { BrowserRouter as Router } from "react-router-dom";
// Thư viện redux
import store from "./redux-toolkit/store";
import { Provider } from "react-redux";
import "swiper/css/bundle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
