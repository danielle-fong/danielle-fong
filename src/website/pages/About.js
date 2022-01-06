import "./About.css";
import school from "./pictures/school.png";
import travel from "./pictures/travel.png";
import food from "./pictures/food.png";
import dog from "./pictures/dog.png";
import music from "./pictures/music.png";

function About(){
    return (
        <>
            <div className = "header-about">
                <h1 className = "title-about">About Me</h1>
                <h1 className = "desc-about">a few things about me</h1>
            </div>

            <div className = "about">
                <div className = "school">
                    <img className="pic1" src={school}/>
                    <h3 className = "text1">I'm an Electrical Engineering student at McMaster University</h3>
                </div>

                <div className = "travel">
                    <img className="pic2" src={travel}/>
                    <h3 className = "text2">I love to travel and explore, so far I've travelled to 11 countries</h3>
                </div>

                <div className = "food">
                    <img className="pic3" src={food}/>
                    <h3 className = "text3">I enjoy cooking, baking, and experimenting with new recipes</h3>

                </div>

                <div className = "dog">
                    <img className="pic4" src={dog}/>
                    <h3 className = "text4">I love dogs, meet my little puppy Apollo</h3>
                </div>

                <div className = "music">
                    <img className="pic5" src={music}/>
                    <h3 className = "text5">I play the guitar and enjoy recording with other musicians</h3>
                </div>

            </div>
        </>
    )
}

export default About;