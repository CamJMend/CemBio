import React, { useEffect, useRef } from "react";
import "./Landing.css";
import WaitlistForm from '../../components/WaitlistForm/WaitlistForm';
import image_card1 from "../../assets/images/CardImage1.png";
import image_card2 from "../../assets/images/CardImage2.png";
import image_card3 from "../../assets/images/CardImage3.png";
import video from "../../assets/videos/SoftPrototype.mp4";
import image_transition1 from "../../assets/images/Transition1.png";
import image_transition2 from "../../assets/images/Transition2.png";

const Landing = () => {
    const transitionImageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const width = window.innerWidth;

            let scrollThreshold = 730;

            if (width <= 480) {
                scrollThreshold = 500; 
            } else if (width <= 768) {
                scrollThreshold = 670; 
            }

            if (scrollY > scrollThreshold) {
                transitionImageRef.current.src = image_transition2;
            } else {
                transitionImageRef.current.src = image_transition1;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className='canvas'>
                <div className="texts-landing">
                    <h1>CemBio</h1>
                    <p>Rapid antibiotic resistance diagnosis. Get precise results in minutes.</p>
                </div>
            </div>
            <div className="solution">
                <h2>Our Solution</h2>
                <div className="product-description">
                    <img ref={transitionImageRef} src={image_transition1} alt="Card Image 1" />
                    <div className="product-description-texts">
                        <h3>Description</h3>
                        <p>We tackle the antibiotic resistance crisis with a colorimetric-based diagnostic kit. Our kit detects resistance in 
                            Pseudomonas aeruginosa quickly and effortlessly.</p>
                        <p>With CemBio, you get fast results and a tool integrated with advanced software that analyzes colorimetric results 
                            and provides detailed information on minimum inhibitory concentration and resistance mechanisms.</p>
                        <ul>
                            <li>Diagnosis in minutes, reducing wait time from days to minutes.</li>
                            <li>Easy to use, no need for sophisticated equipment.</li>
                            <li>Detailed and precise information for more effective treatment.</li>
                        </ul>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={image_card1} alt="Card Image 1" />
                        <h3>Fast and Accessible</h3>
                        <p>Our diagnostic kit provides results in minutes, enabling quicker and more effective medical intervention.</p>
                    </div>
                    <div className="card">
                        <img src={image_card2} alt="Card Image 2" />
                        <h3>Easy to Use</h3>
                        <p>No need for expensive or sophisticated equipment, anyone can use our kit with minimal training.</p>
                    </div>
                    <div className="card">
                        <img src={image_card3} alt="Card Image 3" />
                        <h3>Advanced Analysis</h3>
                        <p>Our software provides a deep understanding of bacterial resistance, informing about minimum inhibitory concentration and resistance mechanisms.</p>
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
    );
}

export default Landing;
