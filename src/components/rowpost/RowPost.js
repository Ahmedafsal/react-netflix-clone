import React, { useState, useEffect } from 'react'
import './RowPost.css'
import axios from '../Axios'
import { posterImageUrl, API_KEY } from '../constants/Contants'
import YouTube from 'react-youtube';

function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState([])
    const [view, setView ] = useState(false)

    useEffect(() => {
        axios.get(props.url).then((response)=> {
            //console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=> {
            setView(false)
            alert('Network Error')
        })
        
    }, [])
 
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    };

    const handleMovie = (id) => {
        //console.log(id);
        //id from maped object
        /*if you need to close one when open another*/
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=> {
            //console.log(response.data)
            if(response.data.results.length !== 0) {
                setView(true)
                setUrlId(response.data.results[0])
            }else {
                //console.log("Array empty")
                setView(false)
                alert("Oops..! video is not available")
            }
        }).catch(err=> {
            alert("Network error")
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movies ? movies.map((obj)=> {
                            if(!obj.backdrop_path || !obj.poster_path) return null
                            return(
                                <img key={obj.id} onClick= {()=> handleMovie(obj.id)} 
                                className={`${props.isSmall ? "poster" : "poster-large"}`} 
                                src= { `${ props.isSmall ? posterImageUrl+obj.backdrop_path : posterImageUrl+obj.poster_path }` } alt={obj.title} />
                            )    
                    })
                    : ""
                }
            </div>
           
                { view && urlId.key &&  <div className="youtube-class">
                        <button onClick={()=>{setView(false)}}className="btn-close">&#10005;</button>
                        <YouTube videoId= {urlId.key} opts={opts}/>
                    </div> } 
            
        </div>
    )
}

export default RowPost;
