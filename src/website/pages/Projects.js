import "./Projects.css";
import colourme from "./projects/colourme.png";
import colourme_gif from "./projects/colourme.gif";
import recycler from "./projects/recycler.png";
import recycler_gif from "./projects/recycler.gif";
import marblemod from "./projects/marblemod.png";
import marblemod_gif from "./projects/marblemod.gif";
import vbook from "./projects/vbook.png";
import vbook_gif from "./projects/vbook.gif";
import cadmodel from "./projects/cadmodel.png";
import cadmodel_gif from "./projects/cadmodel.gif";



function Projects(){
    return (
        <>
            <div className = "header-projects">
                <h1 className = "title-projects">My Projects</h1>
                <h1 className = "description">hover over each project to view more!</h1>
            </div>
            <div className = "block">
            <div className = "row1">
                <div className = "p1">
                    <img className="colourme" src={colourme}/>
                    <div className="colourme_gif">
						<img src={colourme_gif} width = "600px" height = "350px"/>
				    </div>
                </div> 
                <h1 className = "t1">
                    ColourME is a colour palette generator designed to create the perfect palette for the user. 
                    This project was created using ReactJS, JavaScript, HTML, and CSS.
                </h1>
            </div>

            <div className = "row2">
                <div className = "p2">
                    <img className="recycler" src={recycler}/>
                    <div className="recycler_gif">
						<img src={recycler_gif} width = "600px" height = "350px"/>
				    </div>
                </div> 
                <h1 className = "t2">
                    Recycler is a program that organizes recyclable containeers by using sensors to 
                    determine the material and which bin it should be disposed in.
                    This project was coded in Python.                
                </h1>
            </div>

            <div className = "row3">
                <div className = "p3">
                    <img className="marblemod" src={marblemod}/>
                    <div className="marblemod_gif">
						<img src={marblemod_gif} width = "600px" height = "350px"/>
				    </div>
                </div> 
                <h1 className = "t3">
                    Marble Mod adds decorative marble blocks into your Minecraft world. 
                    This mod was created using FabricMC's mod template and coded in Java.              
                </h1>
            </div>

            <div className = "row4">
                <div className = "p4">
                    <img className="vbook" src={vbook}/>
                    <div className="vbook_gif">
						<img src={vbook_gif} width = "600px" height = "350px"/>
				    </div>
                </div> 
                <h1 className = "t4">
                    Vbook is a Facebook Messenger extension for speech to text chatting 
                    that includes a bot to accept and give responses to the user. 
                    This project was coded in Python and uses IBM Watson and Facebook Messenger API.
                </h1>
            </div>

            <div className = "row5">
                <div className = "p5">
                    <img className="cadmodel" src={cadmodel}/>
                    <div className="cadmodel_gif">
						<img src={cadmodel_gif} width = "600px" height = "350px"/>
				    </div>
                </div> 
                <h1 className = "t5">
                    The surgical container was designed to be placed into an autoclave by a robotic arm to 
                    securely hold and sterilize a surgical tool.  
                    This CAD model was created using Autodesk Inventor.
                </h1>
            </div>

            </div>            
        </>
    )
}

export default Projects;