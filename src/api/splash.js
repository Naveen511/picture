import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID HEB4VPfpaqdgHQFVt7e9peeoU1ZMUb0b6yfJw5Wkc50'
    }
})