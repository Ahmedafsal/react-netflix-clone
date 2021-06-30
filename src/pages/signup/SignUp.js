import React, { useState, useRef } from 'react'
import './SignUp.css'

import { Firebase } from '../../firebase/Config'
import LoginNavBar from '../../components/loginnavbar/LoginNavBar'
import { useHistory } from 'react-router-dom'

//import validator from 'validator'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    //validation states follows
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const inputEmail = useRef(null)
    const inputPassword = useRef(null)

    const emailValidator = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    const passwordValidator = (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)

    const handleSubmit = (e)=> {
        e.preventDefault()

        if (email && password) {

            if (email.match(emailValidator)) {
               // console.log('Valid Email')
                setEmailError('')
            } else {
                inputEmail.current.focus()
                setEmailError('Enter valid Email !')
                return
            }

            if (password.length >= 8 && password.match(passwordValidator)){
                    setPasswordError('')
                    //console.log("password is trong")
            } else {
                    inputPassword.current.focus()
                    setPasswordError('Is Not Strong Password')
                    return
            }

            Firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
                result.user.updateProfile({displayName: email}).then(()=> {
                    history.push('/login')
                    alert("Account created")
                })
                }).catch((error)=>{
                    alert(error.message)
                    inputEmail.current.focus()
                    //console.log(error.message)
                })
        } else {
            inputEmail.current.focus()
            alert('please fill the form')
        } 
    }

    return (
        <div className="signup">
            <LoginNavBar/>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <h1 className="form-header">Sign Up</h1>
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
                    <button className="form-btn ">Sign Up</button>
                    <p className="sign-in-anchor" onClick={((e)=> {
                            history.push('/login')
                        })}>Have a plan? 
                        <span> Login now.</span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
