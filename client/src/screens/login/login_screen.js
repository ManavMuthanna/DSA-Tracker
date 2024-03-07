import "../login/login_screen.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log(document.querySelector("#first").value);
    console.log(document.querySelector("#password").value);
    // After successful submission, navigate to the '/home' route
    navigate("/home");
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

          <label className="login-label" for="password">
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

          <div class="login-wrap">
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
