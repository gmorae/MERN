const mysql = require('mysql')
function conexao() {
    return mysql.createConnection({
        host: 'localhost',
        port: '5050',
        user: 'root',
        password: '',
        database: 'mern'
    })
}

//Verifica se está conectado
if(conexao()){
    console.log("DB is connected")
}else{
    console.log("erro")
}

// Exportando uma nova conexão para conseguir reutilizar
module.exports = new conexao()