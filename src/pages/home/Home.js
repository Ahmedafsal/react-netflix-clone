import React from 'react'
import NavBar from "../../components/navbar/NavBar"
import Banner from '../../components/banner/Banner'
import RowPost from '../../components/rowpost/RowPost'
import {originals, action, horror, drama, history} from '../../urlConstants'
import './Home.css'

import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <div className="home">
            <NavBar />
            <Banner />
            <RowPost url= {originals} title= 'NETFLIX ORIGINALS'  />
            <RowPost url= {action} title= 'Action' isSmall />
            <RowPost url= {drama} title= 'Drama' isSmall />
            <RowPost url= {horror} title= 'Horror' isSmall />
            <RowPost url= {history} title= 'History' isSmall />
            {/* by default isSmall return true */}    
            <Footer/>  
        </div>
    )
}

export default Home
