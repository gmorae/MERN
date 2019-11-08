const app = require('./app')
require("./database")
//Função principal para execultar o servidor
async function main(){
    await app.listen(8080)
    console.log("Server on port 8080")
}

main()