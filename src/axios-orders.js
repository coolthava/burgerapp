import axios from 'axios';

const instance= axios.create({
    baseURL:'https://react-my-burger-dbc4a.firebaseio.com/'
})

export default instance;