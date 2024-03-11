import React from 'react'
import "./footer.css";

import logo from "../../images/Logo.png";

const quickLinks01 = [{
    path:"#",
    display: "Features"
},
{
    path:"#",
    display: "Integration"
},
{
    path:"#",
    display: "Updates"
},
{
    path:"#",
    display: "FAQ"
},

{
    path:"#",
    display: "Pricing"
},


]

const quickLinks02 = [{
    path:"#",
    display: "About"
},
{
    path:"#",
    display: "Blog"
},
{
    path:"#",
    display: "Careers"
},
{
    path:"#",
    display: "Manifesto"
},
{
    path:"#",
    display: "Press"
},
{
    path:"#",
    display: "Contact"
}

]

const quickLinks03 = [{
    path:"#",
    display: "Examples"
},
{
    path:"#",
    display: "Community"
},
{
    path:"#",
    display: "Guides"
},
{
    path:"#",
    display: "Docs"
},

]


const quickLinks04 = [{
    path:"#",
    display: "Privacy"
},
{
    path:"#",
    display: "Terms"
},
{
    path:"#",
    display: "Security"
}

]


const Footer = () => {

    const year = new Date().getFullYear()
  return (
   <footer className='footer'>
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <img src={logo} alt="" />
                <div className="description"></div>
                <p className="small__text description">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
            </div>


            <div className="footer__quick-links">
                <div className="quick__links-title">Product</div>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item,index) => (
                            <li className='quick__link-item' key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>


            <div className="footer__quick-links">
                <div className="quick__links-title">Company</div>
                <ul className="quick__links">
                    {
                        quickLinks02.map((item,index) => (
                            <li className='quick__link-item' key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>


            <div className="footer__quick-links">
                <div className="quick__links-title">Resources</div>
                <ul className="quick__links">
                    {
                        quickLinks02.map((item,index) => (
                            <li className='quick__link-item' key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>

            <div className="footer__quick-links">
                <div className="quick__links-title">Legal</div>
                <ul className="quick__links">
                    {
                        quickLinks02.map((item,index) => (
                            <li className='quick__link-item' key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
                <div className="social__media">
                <ul>
                <i class="ri-twitter-x-line"></i>
                <i class="ri-instagram-fill"></i>
                <i class="ri-pinterest-line"></i>
                <i class="ri-linkedin-fill"></i>
                <i class="ri-tiktok-fill"></i>
                <i class="ri-youtube-fill"></i>
                </ul>
            </div>

            </div>

            

        </div>

        
    </div>
   </footer>
  )
}

export default Footer