import UsersList from '../components/users/ListUsers'
import CreateUser from '../components/users/CreateUser'
import TodoList  from '../components/todo/ListTodos'

const routes = [
    {   
        exact: true,
        path: '/',
        component: UsersList   
    },
    {
        path: '/users/list',
        component: UsersList
    },
    {
        path: '/users/:id/todo',
        component: TodoList           
    }
]

export default routes