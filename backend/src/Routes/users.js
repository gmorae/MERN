const {Router} = require('express')
const newRoute = Router()
const { getUser, getUserId, createUser, updateUser, deleteUser } = require('../Controllers/UserController')

// rota / => /api/users
newRoute.route('/')
    .get(getUser)
    .post(createUser)
newRoute.route('/:id')
    .get(getUserId)
    .put(updateUser)
    .delete(deleteUser)
    
module.exports = newRoute