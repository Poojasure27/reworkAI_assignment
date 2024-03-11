import React from 'react'
import "../../styles/hero.css";
import heroImg from "../../images/hero.png";
import elementImg from "../../images/half-torus 1.png";
import elementTwo from "../../images/cylinder 1.png";

const Hero = () => {
  return (
  <section className='hero__section'>
     <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
         
                <div> 
           

                    <button>version 2.0 is here!</button>
               <h1>Pathway to</h1>
                
               
                <h2 className="highlight">productivity</h2>
                </div>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam tempore odio et magni. Eveniet, rem?</p>

                <div className="hero__btns">
                    <button className="primary__btn">Explore Path</button>
                    <h4 className="arrow">Learn more <i class="ri-arrow-right-line"></i></h4>
                   
                </div>
            </div>
            <div className="hero__img">
            <img src={heroImg} alt="hero-image" />
            
           
           
            </div>
            <div className="elements">
                <img src={elementImg} alt="" />
            </div> 
            </div>
         
    </div>

  </section>
  );
}

export default Hero
