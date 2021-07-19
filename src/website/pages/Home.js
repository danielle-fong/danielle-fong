import "./Home.css";
import profile from "./profile.png"
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
                    <h3 className = "text">
                        Welcome to my website! I'm Danielle, a second year Electrical Engineering student studying at McMaster University.
                        I have worked on projects using Python, ReactJS, front-end development and circuit design which has allowed me to enhance my technical skills.
                        Check out the projects I've worked on and more about me on my other pages. Below are the links to my social, feel free to contact me!
                        </h3>
                </div>
                <img className="profile" src={profile}/>
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