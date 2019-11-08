const {Router} = require('express')
const router = Router()

// rota / => /api/users
router.route('/')
    .get((req, res) => res.send("hello user"))
    
module.exports = router