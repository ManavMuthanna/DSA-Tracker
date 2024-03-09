import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import '../team/team.css'

function Team(){
    return(
        <div className='team-body'>
        <div class="main-container">
        <h1>Our Team</h1>
        <hr></hr>
        <div class="members">
        <Link to="https://www.linkedin.com/in/harsh-gupta-001767216/" target="_blank">
            <div class="team-member">
                <img src="/team_images/harsh.jpg" alt="harsh_gupta"/>
                <h2>Harsh Gupta</h2>
                <p>Web Developer</p>
            </div>
            </Link>
            <Link to="https://www.linkedin.com/in/manav-muthanna-6ba5ab216/" target="_blank">
            <div class="team-member">
                <img src ="/team_images/manav.jpg" alt="manav_muthanna"/>
                <h2>Manav Muthanna</h2>
                <p>Web Developer</p>
            </div>
            </Link>
        </div>
    </div>
    </div>
    );
}

export default Team;