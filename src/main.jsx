import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegistrationPage from "./components/RegistrationPage.jsx";
import AccountInfo from "./components/AccountInfo.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegistrationPage />} />
      <Route path="account-info" element={<AccountInfo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
