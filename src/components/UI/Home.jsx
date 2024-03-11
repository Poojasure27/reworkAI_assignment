import React from 'react'
import "../../styles/home.css";

import sponsoredImg from "../../images/Logo Ticker.png";
import homeImg from "../../images/Product Image.png";


const homeDesc = [{
    logo: "ri-leaf-line",
    heading: "Integration ecosystem",
    desc: "Track your progress and motivate your efforts everyday",
    next: "learn more "

},
{

logo: "ri-focus-2-line",
heading: "Goal setting and Tracking",
desc: "Set and track goal with measurable task breakdowns",
next: "learn more "

},

{
logo: "ri-git-repository-private-line",
heading: "Secure data encryption",
desc: "Ensure your data safety with top-tier encryption",
next: "learn more "

},

{
logo:"ri-notification-2-line",
heading: "customizable notification",
desc: "Get alerts on tasks and deadlines that matter the most",
next: "learn more "

}
]

const Home = () => {
  return (
   <section className='home__section'>
    <div className="container">
        <div className="home__wrapper">
            <div className="home__content">
                <div className="sponsored">
                    <img src={sponsoredImg} alt="" />
                  
                </div>
                <div className='button'>
                <button>boost your productivity</button>
                </div>
                <div className="home__text">
                    <h1>A more effective way</h1>
                    <h1>to track progress</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="home__image">
                    <img src={homeImg} alt="" />
                </div>
                <div className="home__desc">
                    {
                        homeDesc.map((item,index) => (
                            <div className="home__item" key ={index}>
                               <div> <span className="home__icon"><i class ={item.logo}></i></span></div>
                                <h2 className="home__title"><p>{item.heading}</p></h2>
                                <h4 className='home__description'>{item.desc}</h4>
                                <div className="button">
                                    <h4>{item.next}<i class="ri-arrow-right-line"></i> </h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
              
                   
                
            </div>
        </div>
    </div>

   </section>
  );
}

export default Home
