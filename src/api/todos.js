import axios from 'axios'

const baseUrl = `https://jsonplaceholder.typicode.com/users`

const enpoint = {
    getTodosUser: (id) => {
        return axios
        .get(`${baseUrl}/${id}/todos`)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return error
            });
    },

    removeTodoUser: (todo) => {
        return axios
        .delete(`${baseUrl}/${todo.userId}/todo/${todo.id}`)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return error
            });
    }, 

    updateTodoUser: (todo) => {
        return axios
        .put(`${baseUrl}/${todo.userId}/todo/${todo.id}`, todo)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return error
            });
    },

    createTodoUser: (todo) => {
        return axios
        .post(`${baseUrl}/${todo.userId}/todo/${todo.userId}/`, todo)
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return error
            });
    },

}

export default enpoint