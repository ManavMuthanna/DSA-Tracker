import '../screens/team.css'

function Team(){
    return(
        <div class="main-container">
        <h1>Our Team</h1>
        <hr></hr>
        <div class="members">
            <div class="team-member">
                <img src="./user.png"/>
                <a href="https://www.linkedin.com/in/harsh-gupta-001767216/" target="_blank"><h2>Harsh Gupta</h2></a>
                <p>Web Developer</p>
            </div>
            <div class="team-member">
                <img src ="./user.png"/>
                <a href="https://www.linkedin.com/in/manav-muthanna-6ba5ab216/" target="_blank"><h2>Manav Muthanna</h2></a>
                <p>Web Developer</p>
            </div>
        </div>
    </div>
    );
}

export default Team;