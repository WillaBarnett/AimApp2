import React from 'react'
import './header.css';
import { Link, withRouter } from "react-router-dom"

const AppHeader= ()=>{
    return(
<header className="component-header">
    <Link to="/" >
        <div className="header-title"> 
            <div className= "title-image">
            <p>
            Aim
            </p>
            <img src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-target-strategy-flatarticons-blue-flatarticons-1.png"/>
            </div>
           
        <div className="header-subtitle"> 
            The power of your ballot</div>
        </div>
        </Link>

        <div className="header-menu">
        <img src="https://img.icons8.com/ios/50/000000/circled-menu.png"/>
        </div>


      </header>)
    }

export default AppHeader;