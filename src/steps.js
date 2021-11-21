import React from 'react'
import './steps.css'
import './routes/statelevel.js'
import {Link} from 'react-router-dom'

function Steps(){
    return(
        
        <div className= "tagline">
            <p> Local elections can be daunting, let us help. </p>
            <div className= "steps-body">
            <div className="left-body">
                <h1>3 Steps</h1>
                <img src="https://img.icons8.com/ios/50/000000/give-way.png"/> 
            </div>
            <div className = "steps-container">
                <div className= "step1">
                
                    <img src="https://img.icons8.com/wired/64/000000/marker.png"/>
                
                <p>Add a zip code</p>
                </div>
                

                <div className= "step2">
                    <img src="https://img.icons8.com/ios/50/000000/calendar--v1.png"/>
                <p>View our calendar to see upcoming local elections</p>
                </div>

                <div className= "step3">
                    <img src="https://img.icons8.com/wired/64/000000/tall-person.png"/>
                <p>Compare candidates to find the right one for you!</p>
                </div>
            </div>
            
        </div>

        <Link to="/StateLevel" > <button className= "lets-go-button">Let's Go!</button> </Link>
        </div>
        
        


    )

}


export default Steps;