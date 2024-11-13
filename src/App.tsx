import React, { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { WelcomePage } from "./components/WelcomePage";
import { TodoList } from "./components/ToDo/TodoList";
import { NavBar } from "./components/Navbar/Navbar";
import { CategoryPage } from "./components/Categories/CategoriesPage";



//Add additional routes for the other pages.
export const App: FC = () => {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <div>
      {isLoggedIn && location.pathname !== '/login' && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/todolist/:category" element={<TodoList />} />
        <Route path="/categories" element={<CategoryPage />} />
        
      </Routes>
    </div>
  );
};