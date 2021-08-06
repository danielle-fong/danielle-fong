import "./Projects.css";
import colourme from "./colourme.png";
import recycle from "./recycle.png";
import marblemod from "./marblemod.png";
import vbook from "./vbook.png";

function Projects(){
    return (
        <>
            <div className = "block">
                <h1 className = "title-projects">My Projects</h1>

            <div className = "row1">
                <div className = "p1">
                    <h1 className = "t1">colourMe is a project designed</h1>
                    <img className="colourme" src={colourme}/>
                </div>
                <div className = "p2">
                    <h1 className = "t2">recycler is a project designed</h1>
                    <img className="recycle" src={recycle}/>
                </div>
            </div>

            <div className = "row2">
                <div className = "p3">
                    <h1 className = "t3">marblemod is a project designed</h1>
                    <img className="marblemod" src={marblemod}/>
                </div>
                <div className = "p4">
                    <h1 className = "t4">vbook is a project designed</h1>
                    <img className="vbook" src={vbook}/>
                </div>
            </div>

            </div>            
        </>
    )
}

export default Projects;