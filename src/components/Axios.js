import axios from 'axios'
import { baseUrl } from './constants/Contants';


const instance = axios.create({
  baseURL: baseUrl
});

export default instance