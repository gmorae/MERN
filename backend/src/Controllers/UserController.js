const connect = require('../database')
const userCtrl = {}
const _table = 'users'
userCtrl.getUser = async (req, res) => {
    const sql = await  "select * from "+ _table
    connect.query(sql, (err, ln, cl) => {
        res.json(ln)
    })
}
userCtrl.createUser = async (req, res) => {
    const { nome} = req.body;
    const sql = await "insert into "+ _table +" (nome) values (?)"
    connect.query(sql,[nome], (err, rs, fl) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("inserido com sucesso")
    })
    res.end()
}

userCtrl.getUserId = async (req, res) => {
    const sql = await  "select * from "+ _table +" where id = ?"
    connect.query(sql, [req.params.id], (err, ln, cl) => {
        res.json(ln)
    })
}

userCtrl.updateUser = (req, res) => {
    const {nome} = req.body;
    const sql = "Update "+ _table +" set nome = ? where id = ? ;"
    connect.query(sql, [nome, req.params.id], (erro, result, fields) => {
        if (erro) {
            console.log('nada foi editado')

        }
        console.log("Atualizado id => "+ req.params.id +" com sucesso")
    })
    res.end()
}


userCtrl.deleteUser = async (req, res) => {
    const sql = await "delete from "+ _table +" where id = ?"
    connect.query(sql, [req.params.id], (err, ln, cl) =>{
        if (err) {
            console.log(err)
        }
        console.log("Excluido com sucesso o id => ", req.params.id)
    })
    res.end()
    
}
module.exports = userCtrl