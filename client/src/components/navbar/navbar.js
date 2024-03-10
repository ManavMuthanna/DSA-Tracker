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

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    window.location.reload();

    // Optionally, you can redirect the user to the login page or perform other logout-related actions
    // For example, you can use react-router-dom to navigate to the login page:
    // history.push("/login");
  };

  const toggleDropdown = () => {
    // Implement logic to show/hide the dropdown
    const dropdown = document.getElementById("logoutDropdown");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  };

  // Call the function to fetch the user profile
  getUserProfile();

  return (
    <div className="navbar">
      <h1 className="navbar-h1">
        {" "}
        <Link to="/home">DSA Tracker</Link>
      </h1>

      <div className="tags">
        <Link className="navbar-link" to="/team">
          <h2>Team</h2>
        </Link>
        <Link
          className="navbar-link"
          to="https://github.com/ManavMuthanna/DSA-Tracker"
          target="_blank"
        >
          <h2>Code</h2>
        </Link>
        <div className="dropdown" style={{ userSelect: "none" }}>
        <h2 className="navbar-link" id="username" style={{ userSelect: "" }} onClick={toggleDropdown}>
          " "
        </h2>
        <div id="logoutDropdown" className="dropdown-content" style={{ userSelect: "none" }}>
            <a href="#" onClick={handleLogout} style={{color: "red"}}>
              Logout
            </a>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
