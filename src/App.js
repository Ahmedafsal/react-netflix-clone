import React, { useContext, useEffect } from 'react'
import './App.css'

import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './pages/signup/SignUp'
import SignIn from './pages/signin/SignIn'

import {AuthContext, FirebaseContext} from './store/Context'
import FirstScreen from './pages/firstscreen/FirstScreen'


function App() {
  const { user, setUser } = useContext(AuthContext)
  const { Firebase } = useContext(FirebaseContext)

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((userObserver) => {
      setUser(userObserver)
    })
  }, [])

  return (
      <Router>
        <Route exact path="/">
          <FirstScreen />
        </Route> 
        <Route exact path="/login">
          <SignIn />
        </Route> 
        {
          user && 
          <Switch>
            <Route path="/home">
              <Home /> 
            </Route>
          </Switch>
        }
        
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Router>
  );
}

export default App;
