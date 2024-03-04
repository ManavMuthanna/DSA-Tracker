import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import Questions from "../components/questions/questions";
import '../screens/home.css';

function Home(){
    return (
        <>
        <Navbar></Navbar>
        <div className="content">
        <Sidebar></Sidebar>
        <Questions></Questions>
        </div>
        </>
    );

}

export default Home;