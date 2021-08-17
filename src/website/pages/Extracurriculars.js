import "./Extracurriculars.css";

function Extracurriculars(){
    return (
        <>
            <div className = "header-extra">
                <h1 className = "title-extra">Extracurriculars</h1>
                <h1 className = "desc-extra">check out some of my hobbies and leadership roles</h1>
            </div>

            <div className = "extra">
                <div className = "b1">
                    <h1 className = "e1">Frosh Leader, Hamilton Chinese Christian Fellowship</h1>
                    <h1 className = "y1">2021</h1>
                </div>

                <div className = "b2">
                    <h1 className = "e2">Public Relations Committee Member, IEEE McMaster Branch</h1>
                    <h1 className = "y2">2020-2021</h1>
                </div>

                <div className = "b3">
                    <h1 className = "e3">Executive Chairman, Markville True Vine Christian Fellowship</h1>
                    <h1 className = "y3">2017-2020</h1>
                </div>

                <div className = "b4">
                    <h1 className = "e4">Music Team Lead Guitarist, AFC Teens Conference</h1>
                    <h1 className = "y4">2017-2020</h1>
                </div>

                <div className = "b5">
                    <h1 className = "e5">Assistant Softball Coach, Chinese Christian Softball Association</h1>
                    <h1 className = "y5">2019</h1>
                </div>
            </div>
        </>
    )
}

export default Extracurriculars;