import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="home-page">
      <div className="home-page__welcome">
        <h1>Welcome!</h1>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
};