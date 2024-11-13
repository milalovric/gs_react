import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

export const NavBar: FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const email = user.email || '';

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="navbar__content">
        {email && (
          <>
            <span className="navbar__email">{email}</span>
            <button className="navbar__logout" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};