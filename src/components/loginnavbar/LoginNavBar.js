import React from 'react'
import './LoginNavBar.css'

import {useHistory} from 'react-router-dom'

import {netflixLogo} from '../constants/Contants'

function LoginNavBar(props) {

    const history = useHistory()

    return (
        <div>
            <div className="navbar">
               <img className="navbar-logo" alt="netflix-logo"
                    onClick= {(e)=> {
                        history.push('/')
                        }}
                    src={netflixLogo}/>
                <div className="right-side">
                    {
                        props.status ?
                            <button className="btn-small" onClick= {(e)=> {
                                history.push('/login')
                                }}>
                                Sign In
                            </button>
                            : ""
                    }
                    <img className= "fork" src="https://static.thenounproject.com/png/1154305-200.png" alt="" />
               </div>
            </div>
        </div>
    )
}

export default LoginNavBar
