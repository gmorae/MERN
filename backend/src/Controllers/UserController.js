const connect = require('../database')
const userCtrl = {}
const _table = 'programadores'
userCtrl.getUser = async (req, res) => {
    const sql = await  "select * from "+ _table
    connect.query(sql, (err, ln, cl) => {
        res.json(ln)
    })
}
userCtrl.createUser = async (req, res) => {
    const { nome, sobrenome, idade, dataDenascimento, linguagem, observacao} = req.body;
    const sql = await "insert into "+ _table +" (nome, sobrenome, idade, dataDenascimento, linguagem, observacao) values (?, ?, ?, ?, ?, ?)"
    connect.query(sql,[nome, sobrenome, idade, dataDenascimento, linguagem, observacao], (err, rs, fl) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("inserido com sucesso")
    })
    res.end()
}

userCtrl.getUserId = async (req, res) => {
    const sql = await  "select * from "+ _table +" where id_programadores = ?"
    connect.query(sql, [req.params.id], (err, ln, cl) => {
        res.json(ln)
    })
}

userCtrl.updateUser = (req, res) => {
    const {nome, sobrenome, idade, dataDenascimento, linguagem, observacao} = req.body;
    const sql = "Update programadores set nome = ?, sobrenome = ?, idade = ?, dataDenascimento = ?, linguagem = ?, observacao = ? where id_programadores = ? ;"
    connect.query(sql, [nome, sobrenome, idade, dataDenascimento, linguagem, observacao, req.params.id], (erro, result, fields) => {
        if (erro) {
            console.log('nada foi editado')

        }
        console.log("Atualizado com sucesso")
    })
    res.end()
}


userCtrl.deleteUser = async (req, res) => {
    const sql = await "delete from "+ _table +" where id_programadores = ?"
    connect.query(sql, [req.params.id], (err, ln, cl) =>{
        if (err) {
            console.log(err)
        }
        console.log("Excluido com sucesso o id => ", req.params.id)
    })
    res.end()
    
}
module.exports = userCtrl