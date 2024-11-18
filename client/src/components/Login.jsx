import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import './Login.css'; // Assuming styles are in Login.css

const Login = ({ setIsLogin }) => {
  const { setEmail, setPassword, login } = useContext(GeneralContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <div className="login-container">
      {/* Left Side with Image */}
      <div className="login-image">
        <img
          src="https://www.oprah.com/g/image-resizer?width=670&link=https://static.oprah.com/images/201302/orig/201302-orig-beautiful-chicken-600x411.jpg" // Replace with your preferred image URL
          alt="Login Visual"
        />
      </div>

      {/* Right Side with Login Form */}
      <div className="login-form-container">
        <form className="authForm" onSubmit={handleLogin}>
          <h2>Welcome Back!</h2>
          <p className="form-subtitle">Please log in to your account</p>

          <div className="form-floating mb-3 authFormInputs">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Email Address</label>
          </div>

          <div className="form-floating mb-3 authFormInputs">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>

          <p className="switch-auth">
            Not registered?{' '}
            <span onClick={() => setIsLogin(false)} className="register-link">
              Register here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
