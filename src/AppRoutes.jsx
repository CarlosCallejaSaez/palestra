import React from "react";
import { Route, Routes } from "react-router-dom";

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
import RestTimerPage from "./pages/RestTimer/RestTimerPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import PdfReaderPage from "./pages/PdfReader/PdfReaderPage";
import StaffPage from "./pages/Staff/StaffPage";
import VendingPage from "./pages/Vending/VendingPage";
import ChatBot from "./components/ChatBot/ChatBot";
import VideoDocumentation from "./pages/VideoDocumentation/VideoDocumentation";


export default function AppRoutes() {

  

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/doc" element={<PdfReaderPage   />} />
      <Route path="/videodoc" element={<VideoDocumentation   />} />
      <Route path="/chatbot" element={<ChatBot   />} />
      <Route path="/staff" element={<StaffPage   />} />
      <Route path="/vending" element={<VendingPage   />} />


      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      


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
          
            <GymExerciseTable />
          
        }
      />

<Route
        path="/tutorial"
        element={
          
            <Tutorial />
          
        }
      />

<Route
        path="/rest"
        element={
          
            <RestTimerPage />
          
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
