import "./Projects.css";
import colourme from "./projects/colourme.gif";
import recycler from "./projects/recycler.gif";
import disdance from "./projects/disdance.gif";
import marblemod from "./projects/marblemod.gif";
import vbook from "./projects/vbook.gif";
import cadmodel from "./projects/cadmodel.gif";

function Projects(){
    return (
        <>
            <div className = "header-projects">
                <h1 className = "title-projects">My Projects</h1>
                <h1 className = "desc-projects">check out some projects I've worked on</h1>
            </div>

            <div className = "block">

            <div className = "row1">
                <div id = "p1">
                    <img src={colourme} width="150" height="200" alt=""></img>
                </div> 
                <h1 className = "t1">
                    ColourME is a colour palette generator designed to create the perfect palette for the user. 
                    This project was created using React, JavaScript, HTML, and CSS.
                </h1>
            </div>

            <div className = "row2">
                <div id = "p2">
                    <img src={recycler} width="150" height="200" alt=""></img>
                </div> 
                <h1 className = "t2">
                    Recycler is a program that organizes recyclable containeers by using sensors to 
                    determine the material and which bin it should be disposed in.
                    This project was coded in Python.                
                </h1>
            </div>

            <div className = "row3">
                <div id = "p3">
                    <img src={disdance} width="150" height="200" alt=""></img>
                </div> 
                <h1 className = "t3">
                    Social Disdance is a web application that allows you to play Just Dance online with friends.
                    This application was built using React, Python, and Django.     
                </h1>
            </div>

            <div className = "row4">
                <div id = "p4">
                    <img src={marblemod} width="150" height="200" alt=""></img>
                </div> 
                <h1 className = "t4">
                    Marble Mod adds decorative marble blocks into your Minecraft world. 
                    This mod was created using FabricMC's mod template and coded in Java.              
                </h1>
            </div>

            <div className = "row5">
                <div id = "p5">
                    <img src={vbook} width="150" height="200" alt=""></img>
                </div> 
                <h1 className = "t5">
                    Vbook is a Facebook Messenger extension for speech to text chatting 
                    that includes a bot to accept and give responses to the user. 
                    This project was coded in Python and uses IBM Watson and Facebook Messenger API.
                </h1>
            </div>

            <div className = "row6">
                <div id = "p6">
                    <img src={cadmodel} width="150" height="200" alt=""></img>
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