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
                {
                props.status ?
                    <button className="btn btn-nav" onClick= {(e)=> {
                        history.push('/login')
                        }}>
                        Sign In
                    </button>
                    : ""
               }
            </div>
        </div>
    )
}

export default LoginNavBar
