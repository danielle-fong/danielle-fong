import "./Projects.css";
import colourme from "./colourme.png";
import recycle from "./recycle.png";
import marblemod from "./marblemod.png";
import vbook from "./vbook.png";
import cadmodel from "./cadmodel.png";


function Projects(){
    return (
        <>
            <div className = "block">
                <h1 className = "title-projects">My Projects</h1>

            <div className = "row1">
                <div className = "p1">
                    <h1 className = "t1">
                        ColourME is a colour palette generator designed to create the perfect palette for the user. 
                        This project was created using ReactJS, JavaScript, HTML, and CSS. 
                    </h1>
                    <img className="colourme" src={colourme}/>
                </div>
                <div className = "p2">
                    <h1 className = "t2">
                        Recycler is a program that organizes recyclable containeers by using sensors to 
                        determine the material and which bin it should be disposed in.
                        This project was coded in Python.
                    </h1>
                    <img className="recycle" src={recycle}/>
                </div>
            </div>

            <div className = "row2">
                <div className = "p3">
                    <h1 className = "t3">
                        Marble Mod adds decorative marble blocks into your Minecraft world. 
                        This mod was created using FabricMC's mod template and coded in Java. 
                        </h1>
                    <img className="marblemod" src={marblemod}/>
                </div>
                <div className = "p4">
                    <h1 className = "t4">
                        Vbook is a Facebook Messenger extension for speech to text chatting 
                        that includes a bot to accept and give responses to the user. 
                        This project was coded in Python and uses IBM Watson and Facebook Messenger API.
                    </h1>
                    <img className="vbook" src={vbook}/>
                </div>
            </div>

            <div className = "row3">
                <div className = "p5">
                    <h1 className = "t5">cadmodel is a project designed</h1>
                    <img className="cadmodel" src={cadmodel}/>
                </div>
            </div>

            </div>            
        </>
    )
}

export default Projects;