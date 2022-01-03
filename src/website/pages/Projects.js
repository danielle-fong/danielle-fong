import "./Projects.css";
import VideoPlayer from "react-video-js-player";
import colourme from "./projects/colourme.mp4";
import recycler from "./projects/recycler.mp4";
import disdance from "./projects/disdance.mp4";
import marblemod from "./projects/marblemod.mp4";
import vbook from "./projects/vbook.mp4";
import cadmodel from "./projects/cadmodel.mp4";

function Projects(){
    return (
        <>
            <div className = "header-projects">
                <h1 className = "title-projects">My Projects</h1>
                <h1 className = "desc-projects">hover over each project to view more!</h1>
            </div>

            <div className = "block">

            <div className = "row1">
                <div className = "p1">
                    <div class="frame">
                    <div class="embed">
                    <iframe width="560" height="315" src={colourme} frameborder="0" allowfullscreen>
                    </iframe>
                    </div>
                    </div>    
                </div> 
                <h1 className = "t1">
                    ColourME is a colour palette generator designed to create the perfect palette for the user. 
                    This project was created using React, JavaScript, HTML, and CSS.
                </h1>
            </div>

            <div className = "row2">
                <div className = "p2">
                    <div class="frame">
                    <div class="embed">
                    <iframe width="560" height="315" src={recycler} frameborder="0" allowfullscreen>
                    </iframe>
                    </div>
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
                    <div class="frame">
                    <div class="embed">
                    <iframe width="560" height="315" src={disdance} frameborder="0" allowfullscreen>
                    </iframe>
                    </div>
                    </div>
                </div> 
                <h1 className = "t3">
                    Social Disdance is a web application that allows you to play Just Dance online with friends.
                    This application was built using React, Python, and Django.     
                </h1>
            </div>

            <div className = "row4">
                <div className = "p4">
                    <div class="frame">
                    <div class="embed">
                    <iframe width="560" height="315" src={marblemod} frameborder="0" allowfullscreen>
                    </iframe>
                    </div>
                    </div>
                </div> 
                <h1 className = "t4">
                    Marble Mod adds decorative marble blocks into your Minecraft world. 
                    This mod was created using FabricMC's mod template and coded in Java.              
                </h1>
            </div>

            <div className = "row5">
                <div className = "p5">
                    <div class="frame">
                    <div class="embed">
                    <iframe width="560" height="315" src={vbook} frameborder="0" allowfullscreen>
                    </iframe>
                    </div>
                    </div>
                </div> 
                <h1 className = "t5">
                    Vbook is a Facebook Messenger extension for speech to text chatting 
                    that includes a bot to accept and give responses to the user. 
                    This project was coded in Python and uses IBM Watson and Facebook Messenger API.
                </h1>
            </div>

            <div className = "row6">
                <div className = "p6">
                    <div class="frame">
                    <div class="embed">
                    <iframe width="560" height="315" src={cadmodel} frameborder="0" allowfullscreen>
                    </iframe>
                    </div>
                    </div>
                </div> 
                <h1 className = "t6">
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