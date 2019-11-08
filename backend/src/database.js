const mysql = require('mysql')

function conexao() {
    return mysql.createConnection({
        host: 'localhost',
        port: '5050',
        user: 'root',
        password: '',
        database: 'testaStefanini'
    })
}

//Verifica se está conectado
if(conexao()){
    console.log("DB is connected")
}else{
    console.log("erro")
}