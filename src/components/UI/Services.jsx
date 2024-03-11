import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import "../../styles/services.css";

import serviceImg1 from "../../images/cube-helix 1.png";
import serviceImg2 from "../../images/cube-helix 2.png";
 
const serviceData = [{
    imgUrl: serviceImg1,
    title: "Integration ecosystem",
    subtitle: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place"},
    {
        imgUrl: serviceImg2,
        title: "Integration ecosystem",
        subtitle: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place"},

]

const Services = () => {
  return (
   <section className='service__section'>
    <div className="container">
     
            <div className="service__content">
                <div className="button">
                    <button>Everything you need</button>
                </div>
                <div className="service__title">
                    <h1>Stream lined for <br />easy management</h1>
                   
                 
                </div>
                <div className="service__description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptates autem! Rerum similique minima pariatur suscipit labore sit nam perspiciatis </p>
                </div>
                <div className="service__wrapper">
                   {
                    serviceData.map((item, index)=> (
                        <div className="service__item" key={index}>
                            <div className="service__image">
                                <img src={item.imgUrl} alt="" />
                            </div>
                            <div className="service__details"><h2>{item.title}</h2>
                            <p className='description'>
                                {item.subtitle}</p></div>
                        </div>
                    ))
                   }
            </div>
        </div>
    </div>
   </section>
  )
}

export default Services
