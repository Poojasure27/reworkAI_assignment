import React from 'react';
import "./header.css";
import logo from "../../images/Logo.png";

const nav__links = [{
    display: "About"
},
{
    display: "Features"
},
{
    display: "Customers"
},
{
    display: "Updates"
},
{
    display: "Help"
},
{
    display: ""
}];

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                   <img src={logo} alt="" /> 
                </div>

                {/* Navigation */}
                
                <div className="navigation">
                    <ul className="menu">
                     {
                        nav__links.map((item, index)=> (
                            <li className="menu__item" key={index}>
                                <div className="menu__link">{item.display}
                                 
                                </div>
                               
                            </li>
                     ))}
                        <button>Get for free</button>
                    </ul>
                 
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
