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
            <div className= "right-side">
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
                <img className= "avatar" src="https://static.thenounproject.com/png/1154305-200.png" alt="" />
            </div>
        </div>
    )
}

export default NavBar
