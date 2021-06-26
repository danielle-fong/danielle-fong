import "./Home.css";
import github from "./github.png"

function Home(){
    return (
        <>
            <div className = "intro">
                <div className = "intro-text">
                    <h1 className = "header">ELECTRICAL ENGINEER</h1>
                    <h2 className = "name">Danielle Fong</h2>
                </div>
                <img className="profile" src={github}/>
            </div>
            <div className = "social">
                <img className="github" src={github}/>
            </div>
        </>
    );
}

export default Home;