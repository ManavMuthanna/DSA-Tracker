import "../signup/sign_up.css";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log(document.querySelector("#first").value);
    const userName = document.querySelector("#first").value;
    const emailId = document.querySelector("#email").value;
    const pwd = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#password2").value;

    // Validate email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      alert("Please enter a valid email address");
      return;
    }

    // Check if password and confirm password match
    if (pwd !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(userName, emailId, pwd);

	try {
		const signUpInfo = {
			"username": userName,
			"email": emailId,
			"password" : pwd
		  };

		// Make an Axios POST request to your backend route
		const response = await axios.post(`${baseURL}/auth/register`, signUpInfo);
	
		// After successful submission, navigate to the '/home' route
		alert("Registration Successful!");
		navigate("/");
	
		// Optionally, you can handle the response data here
		console.log(response.data);
	  } catch (error) {
		// Handle server-side validation errors
		console.error('Registration failed:', error.response.data);
		// Display appropriate error messages to the user
		alert('Registration failed. Please check your input and try again.');
	  }
  };
  return (
    <div className="signup-body">
      <div className="signup-main">
      <Link className="back-link" to="/"><h1 className="signup-h1">DSA Tracker</h1></Link>
        <h3>Sign up</h3>
        <form onSubmit={handleSignupFormSubmit}>
          <label className="signup-label">Username:</label>
          <input
            className="signup-input"
            type="text"
            id="first"
            name="first"
            placeholder="Enter your Username"
            required
          />

          <label className="signup-label">Email:</label>
          <input
            className="signup-input"
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email ID"
            required
          />

          <label className="signup-label" for="password">
            Password:
          </label>
          <input
            className="signup-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
          />

          <label className="signup-label" for="password2">
            Confirm Password:
          </label>
          <input
            className="signup-input"
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm Password"
            required
          />

          <div class="signup-wrap">
            <button className="signup-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
