import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        console.log('Login successful');
        // Redirect to welcome page with email
        navigate('/welcome', { state: { email } });
      } else {
        console.log('Invalid email or password');
      }
    } else {
      console.log('No user found');
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate('/register')}>
          Nemate još račun? Registrirajte se
        </button>
      </form>
    </div>
  );
};