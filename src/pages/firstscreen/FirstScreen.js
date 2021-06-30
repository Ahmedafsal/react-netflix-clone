import React from 'react'
import './FirstScreen.css'

import {bgImage} from '../../components/constants/Contants'
import {useHistory} from 'react-router-dom'
import LoginNavBar from '../../components/loginnavbar/LoginNavBar'

import Footer from '../../components/footer/Footer'

function FirstScreen() {

    const history = useHistory()

    return (
        <div>
            <div className="firstscreen" style= {{ 
                backgroundSize: "cover",
                backgroundImage: `url(${bgImage})`, 
                backgroundPosition: "center center"    
            }} 
                >
            
                <LoginNavBar status="true"/>
                <div className="content">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <p className="first-description">Watch anywhere. Cancel anytime.</p>
                    <p className="second-description">Ready to watch? Enter your email to create or 
                    restart your membership.</p>
                    <div className="input-mail">
                        <input placeholder="Email address" type="text"/>
                        <button className="btn btn-larg" onClick= {(e)=> {
                                history.push('/signup')
                            }}>Get Started 
                            <span> &#10093;</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default FirstScreen
