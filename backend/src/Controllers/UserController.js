const userCtrl = {}

userCtrl.getUser    = (req, res) => res.json({message: []})
userCtrl.createUser = (req, res) => res.json({message: "User save"})
userCtrl.updateUser = (req, res) => res.json({message: "User Update"})
userCtrl.deleteUser = (req, res) => res.json({message: "User Delete"})
module.exports = userCtrl