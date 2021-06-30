import React, {useContext} from 'react'
import "./NavBar.css"
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router';

import {netflixLogo} from '../constants/Contants'

function NavBar() {

    const { Firebase } = useContext(FirebaseContext)
    const {user} = useContext(AuthContext)
    const history = useHistory()

    return (
        <div className="navbar">
            <img className= "logo" onClick={()=>{
                history.push("/")
            }
            }
                src={netflixLogo}
                alt="netflix-log" />
            {
        /*--logout button, make it right by drope down--*/
                user && <span onClick= {()=> {
                        Firebase.auth().signOut().then(()=>{
                        history.push("/login")
                        alert("Logging out..!")
                        }).catch((error)=> {
                        alert(error.message)
                        })
                    }}>{user.displayName}
                        <p>/logout</p>
                    </span> 
            }
            <img className= "avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
           
        </div>
    )
}

export default NavBar
