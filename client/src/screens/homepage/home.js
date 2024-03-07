import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Questions from "../../components/questions/questions";
import '../homepage/home.css';

function Home(){
    return (
        <>
        <Navbar></Navbar>
        <div className="home-content">
        <Sidebar className='home-sidebar'></Sidebar>
        <Questions></Questions>
        </div>
        </>
    );

}

export default Home;