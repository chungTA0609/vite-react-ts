import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";
import Root from "./routes/root.tsx";
// import ErrorPage from "./components/ErrorComponent.tsx";
import ProductPage from "./routes/product.tsx";
// import Layout from "./components/Layout.tsx";
import LandingPage from "./components/LandingPageComponent.tsx";
import DemoTailwind from "./components/DemoTailwind.tsx";
import ProductOverviewComponent from "./components/ProductOverviewComponent.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import NewProduct from "./components/NewProduct.tsx";
import Login from "./components/SiginComponent.tsx";
import ForgotPassword from "./components/ForgotPassword.tsx";
import RegisterComponent from "./components/RegisterComponent.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountryFilter from "./components/CountryFilter.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<LandingPage />} />
            <Route path="product" element={<ProductPage />}></Route>
            <Route path="country-filter" element={<CountryFilter />}></Route>
            <Route
              path="product/:productId"
              element={<ProductOverviewComponent />}
            />
            <Route path="/new-product" element={<NewProduct />}></Route>
          </Route>
          <Route path="/demo" element={<DemoTailwind />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/register" element={<RegisterComponent />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
    </Provider>
  </React.StrictMode>
);
