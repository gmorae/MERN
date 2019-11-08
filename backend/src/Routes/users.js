const {Router} = require('express')
const newRoute = Router()
const { getUser, createUser, updateUser, deleteUser } = require('../Controllers/UserController')

// rota / => /api/users
newRoute.route('/')
    .get(getUser)
    .post(createUser)
newRoute.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)
    
module.exports = newRoute