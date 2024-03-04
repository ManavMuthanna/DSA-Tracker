import '../navbar/navbar.css'

function Navbar () {
    return(
        <div className="navbar">
            <h1>DSA Tracker</h1>
             <div className="tags">   
            <a href="#"><h2>Team</h2></a>
            <a href="#"><h2>Code</h2></a>
            </div>
        </div>
    );
}

export default Navbar;
