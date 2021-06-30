import {API_KEY} from './components/constants/Contants'


export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`; 
export const horror= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const drama =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`;
export const history = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`


//react-netflix-clone-f5f9f