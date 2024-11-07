import React, { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./WelcomePage.scss";

interface LocationState {
  email: string;
}

export const WelcomePage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const { email } = state || { email: '' };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleTodoList = () => {
    navigate('/todolist');
  };

  return (
    <div className="welcome-page">
      <div className="welcome-page__content">
        <h1>Welcome, {email}!</h1>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleTodoList}>Go to Todo List</button>
      </div>
    </div>
  );
};