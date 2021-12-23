import "./Extracurriculars.css";
import frosh from "./extra/frosh.jpeg";
import ultimate from "./extra/ultimate.jpg";
import softball from "./extra/softball.jpg";
import tc from "./extra/tc.jpg";
import markville from "./extra/markville.jpeg";
import ccsa from "./extra/ccsa.jpeg";
import slopitch from "./extra/slopitch.jpg";

function Extracurriculars(){
    return (
        <>
            <div className = "header-extra">
                <h1 className = "title-extra">Extracurriculars</h1>
                <h1 className = "desc-extra">check out some of my hobbies and leadership roles</h1>
            </div>

            <div className = "extra">
            <h1 className = "heading-extra">LEADERSHIP</h1>
                    <div className = "b1">
                    <h1 className = "e1">Frosh Leader, Hamilton Chinese Christian Fellowship</h1>
                    <h1 className = "y1">2021</h1>
                </div>
                <img className="pc1" src={frosh}/>

                <div className = "b2">
                    <h1 className = "e2">Computer Chapter PR Representative, IEEE McMaster Branch</h1>
                    <h1 className = "y2">2020-2021</h1>
                </div>

                <div className = "b3">
                    <h1 className = "e3">Executive Chairman, Markville True Vine Christian Fellowship</h1>
                    <h1 className = "y3">2017-2020</h1>
                </div>
                <img className="pc3" src={markville}/>

                <div className = "b4">
                    <h1 className = "e4">Music Team Lead Guitarist, AFC Teens Conference</h1>
                    <h1 className = "y4">2017-2020</h1>
                </div>
                <img className="pc4" src={tc}/>

                <div className = "b5">
                    <h1 className = "e5">Assistant Softball Coach, Chinese Christian Softball Association</h1>
                    <h1 className = "y5">2019</h1>
                </div>
                <img className="pc5" src={ccsa}/>

            <h1 className = "heading-extra">SPORTS</h1>

                <div className = "b1">
                    <h1 className = "e1">Ultimate Intramurals, McMaster University</h1>
                    <h1 className = "y1">2021</h1>
                </div>
                <img className="pc1" src={ultimate}/>

                <div className = "b1">
                    <h1 className = "e1">Softball Intramurals, McMaster University</h1>
                    <h1 className = "y1">2021</h1>
                </div>
                <img className="pc1" src={softball}/>

                <div className = "b1">
                    <h1 className = "e1">Co-ed Varsity Ultimate, Markville Secondary School</h1>
                    <h1 className = "y1">2016-2019</h1>
                </div>

                <div className = "b1">
                    <h1 className = "e1">Girls' Varsity Slo-Pitch, Markville Secondary School</h1>
                    <h1 className = "y1">2016-2019</h1>
                </div>
                <img className="pc1" src={slopitch}/>
            </div>

        </>
    )
}

export default Extracurriculars;