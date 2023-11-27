import React from "react";
import { Route, Routes } from "react-router-dom";
;
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import AuthRoute from "./components/AuthRoute/AuthRoute";

import ProfilePage from "./pages/Profile/ProfilePage";
import QRGenerator from "./components/QRGenerator/QRGenerator";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />


      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />


      <Route
        path="/profile"
        element={
          <AuthRoute>
            <ProfilePage />
          </AuthRoute>
        }
      />

<Route
        path="/qr"
        element={
          <AuthRoute>
            <QRGenerator />
          </AuthRoute>
        }
      />

    </Routes>
  );
}
