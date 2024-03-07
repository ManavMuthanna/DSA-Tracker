import "../login/login_screen.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic here
    const userName = document.querySelector("#first").value;
    const pwd = document.querySelector("#password").value;
    try {
      const loginInfo = {
        "username": userName,
        "password" : pwd
        };
  
      // Make an Axios POST request to your backend route
      const response = await axios.post(`${baseURL}/auth/login`, loginInfo);
    
      // After successful submission, navigate to the '/home' route
      localStorage.setItem('token', response.data.token);
      console.log("Login Successful!");
      navigate("/home");
    
      // Optionally, you can handle the response data here
      console.log(response.data);
      } catch (error) {
      // Handle server-side validation errors
      console.error('Registration failed:', error.response.data);
      // Display appropriate error messages to the user
      alert('Login failed. Please check your username and password entered.');
      }
  };

  return (
    <div className="login-body">
      <div className="main">
        <h1 className="login-header">DSA Tracker</h1>
        <h3>Enter your login credentials</h3>
        <form onSubmit={handleLoginFormSubmit}>
          <label className="login-label">Username:</label>
          <input
            className="login-input"
            type="text"
            id="first"
            name="first"
            placeholder="Enter your Username"
            required
          />

          <label className="login-label">
            Password:
          </label>
          <input
            className="login-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
          />

          <div className="login-wrap">
            <button className="login-button" type="submit">Submit</button>
          </div>
        </form>
        <p>
          Not registered?
          <Link className='login-link' to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
