import React from "react";
import { Route, Routes } from "react-router-dom";
;
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import AuthRoute from "./components/AuthRoute/AuthRoute";

import ProfilePage from "./pages/Profile/ProfilePage";
import QRGenerator from "./components/QRGenerator/QRGenerator";

import GymExerciseTable from "./components/GymExerciseTable/GymExerciseTable";
import Tutorial from "./components/Tutorial/Tutorial";
import ClassesPage from "./pages/Classes/ClassesPage";
import ExercisesPage from "./pages/Exercises/ExercisesPage";



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


      <Route
        path="/random"
        element={
          <AuthRoute>
            <GymExerciseTable />
          </AuthRoute>
        }
      />

<Route
        path="/tutorial"
        element={
          <AuthRoute>
            <Tutorial />
          </AuthRoute>
        }
      />

<Route
        path="/classes"
        element={
          <AuthRoute>
            <ClassesPage />
          </AuthRoute>
        }
      />

<Route
        path="/exercises"
        element={
          <AuthRoute>
            <ExercisesPage/>
          </AuthRoute>
        }
      />





    </Routes>
  );
}
