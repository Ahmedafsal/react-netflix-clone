import React, {useState, useRef} from 'react'
import './SignIn.css'

import {Firebase} from '../../firebase/Config'
import {useHistory} from 'react-router-dom'

import {bgImage} from '../../components/constants/Contants'
import LoginNavBar from '../../components/loginnavbar/LoginNavBar'

//import validator from 'validator'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const inputEmail = useRef(null)
    const inputPassword = useRef(null)

    const emailValidator = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
   
    const handleSubmit = (e)=> {
        e.preventDefault()

        if (email && password) {

            if (email.match(emailValidator)) {
                //console.log('Valid Email')
                setEmailError('')
            } else {
                inputEmail.current.focus()
                setEmailError('Enter valid Email !')
                return
            }

            Firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
                history.push('/home')
                alert("login successfull")
            }).catch((error)=> {
                //console.log(error.code)

                if (error.code === "auth/user-not-found"){
                    alert(error.code)
                    setPasswordError('')
                    setEmailError(error.code)
                    inputEmail.current.focus()
                } 
                if(error.code === "auth/wrong-password"){
                    alert("Entered password is wrong")
                    setPasswordError("Entered password is wrong")
                    setEmailError('')
                    inputPassword.current.focus()
                }
            })
        } else {
            inputEmail.current.focus()
            alert('please fill the form')
        } 
    }

    return (
        <div className="signin" style= {{ 
            backgroundSize: "cover",
            backgroundImage: `url(${bgImage})`, 
            backgroundPosition: "center center"    
        }} 
            >
            <LoginNavBar />
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <h1 className="form-header">Sign In</h1>
                    <input value={email} onChange={(e)=> {
                        setEmail(e.target.value)
                        }}  
                        className="form-text" type="text" ref={inputEmail}
                        placeholder="email"/>
                    <p className="error-message">{emailError}</p>
                    <input value={password} onChange={(e)=> {
                        setPassword(e.target.value)
                    }} 
                        className="form-text" type="password" ref={inputPassword}
                        placeholder="password"/>
                    <p className="error-message">{passwordError}</p>
                    <button className="form-btn ">Sign In</button>
                   <p className="sign-up-anchor" onClick={((e)=> {
                            history.push('/signup')
                        })}>New to Netflix? 
                        <span> Sign up now.</span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
