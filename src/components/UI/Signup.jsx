import React from 'react'
import "../../styles/signup.css";

import img1 from "../../images/emojistar 1.png";
import img2 from "../../images/helix2 1.png";

const Signup = () => {
  return (
    <section className='signup__section'>
        <div className="container">
            <div className="signup__content">
                <img src={img1} alt="" />
                
            </div>
            <div className="signup__heading">
            <h1 className='heading'>Sign up for free today</h1>
            </div>
            <div className="description">
                <p>Celebrate the joy of accomplishment with an app designed<br /> to track your progress and motivate your efforts.</p>
                
            </div>
            
            
        </div>
        <div className="button">
                <button>Get started</button>
                <h4>Learn more <i class="ri-arrow-right-line"></i></h4>
                </div>
                <div className="image-two">
                <img src={img2} alt="" />
                </div>
              
        
    </section>
  )
}

export default Signup
