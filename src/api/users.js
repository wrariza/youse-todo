import axios from 'axios'

const baseUrl = `https://jsonplaceholder.typicode.com/users`

const enpoint = {
    
    list: () => {
        return axios
        .get(`${baseUrl}`)
            .then((response) => {                                                   
                return response.data
            })
            .catch((error) => {
                return error
            })
    },
    
    getUser: (id) => {
        return axios
        .get(`${baseUrl}/${id}`)
            .then((response) => { 
                return response.data
            })
            .catch((error) => {
                return error
            })
    },

    createUser: (data) => {
        return axios
        .post(`${baseUrl}`, data)
            .then((response) => { 
                return response.data
            })
            .catch((error) => {
                return error
            })
    }
}

export default enpoint