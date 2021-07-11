import React from 'react'
import {useState, useEffect} from 'react'
import './Banner.css'
import axios from '../Axios'
import { API_KEY, imageUrl } from '../constants/Contants';


function Banner() {

    const [movie, setMovie] = useState();
    let shuffle = Math.floor((Math.random() * 20));
    useEffect(() => {
        axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
            //console.log("trending list")
            //console.log(response.data.results[shuffle]);
            setMovie(response.data.results[shuffle])
        });
    }, [])

    

    return (
        <div style= {{ 
            backgroundSize: "cover",
            backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : "" })`, 
            backgroundPosition: "center center"    
        }} 
            >
            <div className= "banner-content">
                <h1 className= "banner-title">{ movie ? (movie.title ? movie.title : movie.name) : "" }</h1>
                <div className= "banner-buttons">
                    <button className= "button"><span role="img" aria-label="play">&#9654;</span> Play</button>
                    <button className= "button"><span role="img" aria-label="list">&#128211;</span> Mylist</button>
                </div>
                <h1 className="banner-description">{ movie ? movie.overview : "no data found" }</h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
