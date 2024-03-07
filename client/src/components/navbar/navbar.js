import "../navbar/navbar.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  // Assume you have a function to retrieve the token from localStorage
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const baseURL = process.env.REACT_APP_BASE_URL;

  const getUserProfile = async () => {
    try {
      const token = getToken();

      if (!token) {
        // Handle the case where the token is not available
        console.error("Token is not available");
        return;
      }

      // Set up the headers with the Authorization Bearer token
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Make an Axios GET request to the user profile route with the headers
      const response = await axios.get(`${baseURL}/user/profile`, { headers });

      // Access the HTML element with the ID 'username' and set its text content
      const usernameElement = document.getElementById("username");
      if (usernameElement) {
        usernameElement.innerText = response.data.message;
      } else {
        console.error('Element with ID "username" not found');
      }
    } catch (error) {
      // Handle errors
      console.error(
        "Error fetching user profile:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // Call the function to fetch the user profile
  getUserProfile();

  return (
    <div className="navbar">
      <h1 className="navbar-h1">DSA Tracker</h1>
      <div className="tags">
        <Link className="navbar-link" to="/home">
          <h2>Team</h2>
        </Link>
        <Link
          className="navbar-link"
          to="https://github.com/ManavMuthanna/DSA-Tracker"
          target="_blank"
        >
          <h2>Code</h2>
        </Link>
          <h2 className="navbar-link" id="username" style={{ userSelect: ""}}>" "</h2>
      </div>
    </div>
  );
}

export default Navbar;
