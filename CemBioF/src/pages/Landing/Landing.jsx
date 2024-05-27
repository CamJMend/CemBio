import React from "react";
import "./Landing.css";
import WaitlistForm from '../../components/WaitlistForm/WaitlistForm';
import image_card1 from "../../assets/images/CardImage1.png";
import image_card2 from "../../assets/images/CardImage2.png";
import image_card3 from "../../assets/images/CardImage3.png";
import video from "../../assets/videos/hookenz.mp4";


const Landing = () => {
    return (
        <>
            <div className='canvas'>
                <div className="texts-landing">
                    <h1>CemBio</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <div className="solution">
                <h2>Our Solution</h2>
                <div className="cards">
                    <div className="card">
                        <img src={image_card1} alt="Card Image 1" />
                        <h3>Title 1</h3>
                        <p>Description 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="card">
                        <img src={image_card2} alt="Card Image 2" />
                        <h3>Title 2</h3>
                        <p>Description 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="card">
                        <img src={image_card3} alt="Card Image 3" />
                        <h3>Title 3</h3>
                        <p>Description 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="video-form">
                <div className="video-container">
                    <video controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <WaitlistForm />
            </div>
        </>
      )
}
    
export default Landing