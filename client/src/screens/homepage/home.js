import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import '../homepage/home.css';

function Home(){
    return (
        <div className="home-body">
        <Navbar></Navbar>
        <div className="home-content">
        <Sidebar className='home-sidebar'></Sidebar>
        </div>
        </div>
    );

}

export default Home;