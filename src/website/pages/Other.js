import "./Other.css";
import school from "./pictures/school.png";
import travel from "./pictures/travel.png";
import dog from "./pictures/dog.png";
import music from "./pictures/music.png";

function Other(){
    return (
        <>
            <h1 className = "header">Leadership Experience</h1>
            <div className = "about">
                <div className = "school">
                    <img className="pic1" src={school}/>
                    <h3 className = "text1">Electrical Engineering student at McMaster University</h3>
                </div>

                <div className = "travel">
                    <img className="pic2" src={travel}/>
                    <h3 className = "text2">loves to travel and explore nature</h3>
                </div>

                <div className = "food">
                    <img className="pic3" src={dog}/>
                    <h3 className = "text3">enjoys cooking and baking</h3>

                </div>

                <div className = "dog">
                    <img className="pic4" src={dog}/>
                    <h3 className = "text4">loves dogs and has a puppy named Apollo</h3>
                </div>

                <div className = "music">
                    <img className="pic5" src={music}/>
                    <h3 className = "music">enjoys music and playing guitar</h3>

                </div>

            </div>
        </>
    )
}

export default Other;