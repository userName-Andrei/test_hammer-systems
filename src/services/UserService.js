import axios from 'axios';

const UserService = {};

UserService.getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    return response.data
}

UserService.getUser = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    return response.data
}

UserService.postUser = async (id, body) => {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/users/${id}`, {
        body
    });

    return response.data
}

export default UserService