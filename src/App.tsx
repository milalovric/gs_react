import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { WelcomePage } from "./components/WelcomePage";

//Add additional routes for the other pages.
export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />}  />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  );
};