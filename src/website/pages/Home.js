import "./Home.css";
import github from "./github.png"
import linkedin from "./linkedin.png"
import resume from "./resume.png"
import email from "./email.png"
import devpost from "./devpost.png"

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
                <img className="linkedin" src={linkedin}/>
                <img className="resume" src={resume}/>
                <img className="email" src={email}/>
                <img className="devpost" src={devpost}/>
            </div>
        </>
    );
}

export default Home;