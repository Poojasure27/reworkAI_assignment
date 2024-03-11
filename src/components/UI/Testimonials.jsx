import React from 'react'
import "../../styles/testimonial.css";

import Image1 from "../../images/mark.jpeg";

const testimonialData1 = [{
    desc:"This app has completely transformed how i manage my projects and deadlines ",
    imgUrl: Image1,
    name: "Mark Zukerberg"
},
{
    desc:"This app has completely transformed how i manage my projects and deadlines ",
    imgUrl: Image1,
    name: "Mark Zukerberg"
},
{
    desc:"This app has completely transformed how i manage my projects and deadlines  ",
    imgUrl: Image1,
    name: "Mark Zukerberg"
},

]

const testimonialData2 =[{
    
        desc:"This app has completely transformed how i manage my projects and deadlines  ",
        imgUrl: Image1,
        name: "Mark Zukerberg"
    },
    {
        desc:"This app has completely transformed how i manage my projects and deadlines  ",
        imgUrl: Image1,
        name: "Mark Zukerberg"
    },
    {
        desc:"This app has completely transformed how i manage my projects and deadlines  ",
        imgUrl: Image1,
        name: "Mark Zukerberg"
    },
]

const testimonialData3 =[{
    
        desc:"This app has completely transformed how i manage my projects and deadlines  ",
        imgUrl: Image1,
        name: "Mark Zukerberg"
    },
    {
        desc:"This app has completely transformed how i manage my projects and deadlines  ",
        imgUrl: Image1,
        name: "Mark Zukerberg"
    },
    {
        desc:"This app has completely transformed how i manage my projects and deadlines  ",
        imgUrl: Image1,
        name: "Mark Zukerberg"
    },
]

const Testimonials = () => {
  return (
    <section className='testimonial__section'>
        <div className="container">
            <div className="testimonial__content">
                <div className="button">
                <button>Testimonials</button>
                </div>
                <h1 className='heading'>What our users say</h1>
                

                <div className="testimonial__wrapper">
                    {
                       testimonialData1.map((item,index)=>(
                        <div className="testimonial__item" key={index}>
                            <div className="testimonial__description">{item.desc}</div>
                            <div className="testimonial__img">
                              <img src={item.imgUrl} alt="" />
                            </div>
                            <div className="testimonial__name"><h4>{item.name}</h4></div>
                        </div>
                       ))
                    }

{
                       testimonialData2.map((item,index)=>(
                        <div className="testimonial__item" key={index}>
                            <div className="testimonial__description">{item.desc}</div>
                            <div className="testimonial__img">
                              <img src={item.imgUrl} alt="" />
                            </div>
                            <div className="testimonial__name"><h4>{item.name}</h4></div>
                        </div>
                       ))
                    }

{
                       testimonialData3.map((item,index)=>(
                        <div className="testimonial__item" key={index}>
                            <div className="testimonial__description">{item.desc}</div>
                            <div className="testimonial__img">
                              <img src={item.imgUrl} alt="" />
                            </div>
                            <div className="testimonial__name"><h4>{item.name}</h4></div>
                        </div>
                       ))
                    }
                </div>
            </div>

        </div>
    </section>
  );
}

export default Testimonials
