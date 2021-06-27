import "./Home.css";
import github from "./github.png"
import devpost from "./devpost.png"
import resume from "./resume.png"
import email from "./email.png"
import linkedin from "./linkedin.png"


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
                <a href="https://github.com/danielle-fong"><img className="github" src={github}/></a>
                <a href="https://devpost.com/danielle-fong"><img className="devpost" src={devpost}/></a>
                <a href="DanielleFong.pdf"><img className="resume" src={resume}/></a>
                <a href = "mailto: daniellefong13@gmail.com"><img className="email" src={email}/></a>
                <a href="https://www.linkedin.com/in/danielle-fong/"><img className="linkedin" src={linkedin}/></a>
            </div>
        </>
    );
}

export default Home;