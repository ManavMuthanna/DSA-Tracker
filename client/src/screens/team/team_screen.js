import { Link } from 'react-router-dom';
import '../team/team.css'

function Team(){
    return(
        <div className='team-body'>
        <div class="main-container">
        <h1 className='team-h1'>Our Team</h1>
        <hr className='team-hr'></hr>
        <div class="members">
        <Link className='team-a' to="https://www.linkedin.com/in/harsh-gupta-001767216/" target="_blank">
            <div class="team-member">
                <img className='team-img' src="/team_images/harsh.jpg" alt="harsh_gupta"/>
                <h2 className='team-name'>Harsh Gupta</h2>
                <p className='team-name'>Web Developer</p>
            </div>
            </Link>
            <Link className='team-a' to="https://www.linkedin.com/in/manav-muthanna-6ba5ab216/" target="_blank">
            <div class="team-member">
                <img className='team-img' src ="/team_images/manav.jpg" alt="manav_muthanna"/>
                <h2 className='team-name'>Manav Muthanna</h2>
                <p className='team-name'>Web Developer</p>
            </div>
            </Link>
        </div>
    </div>
    </div>
    );
}

export default Team;