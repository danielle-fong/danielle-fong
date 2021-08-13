import "./Projects.css";
import colourme from "./colourme.png";
import colourme_gif from "./colourme.gif";
import recycler from "./recycler.png";
import recycler_gif from "./recycler.gif";
import marblemod from "./marblemod.png";
import marblemod_gif from "./marblemod.gif";
import vbook from "./vbook.png";
import vbook_gif from "./vbook.gif";
import cadmodel from "./cadmodel.png";
import cadmodel_gif from "./cadmodel.gif";



function Projects(){
    return (
        <>
            <div className = "block">
                <h1 className = "title-projects">My Projects</h1>

            <div className = "row1">
                <div className = "p1">
                    <img className="colourme" src={colourme}/>
                    <div className="colourme_gif">
						<img src={colourme_gif} width = "600px" height = "370px"/>
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
						<img src={recycler_gif} width = "600px" height = "370px"/>
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
						<img src={marblemod_gif} width = "600px" height = "370px"/>
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
						<img src={vbook_gif} width = "600px" height = "370px"/>
				    </div>
                </div> 
                <h1 className = "t4">
                    Marble Mod adds decorative marble blocks into your Minecraft world. 
                    This mod was created using FabricMC's mod template and coded in Java.              
                </h1>
            </div>

            <div className = "row5">
                <div className = "p5">
                    <img className="cadmodel" src={cadmodel}/>
                    <div className="cadmodel_gif">
						<img src={cadmodel_gif} width = "600px" height = "370px"/>
				    </div>
                </div> 
                <h1 className = "t5">
                    cad adds decorative cad marble blocks into your Minecraft world. 
                    This mod was created using FabricMC's mod template and coded in Java.
                </h1>
            </div>

            </div>            
        </>
    )
}

export default Projects;