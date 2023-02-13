const database = 'SistemaInfoDb';

db = connect("localhost:27017/test");

use(database);

db.createCollection("Usuarios");

db.Usuarios.insertMany([
    { "Codigo": "1234", "Nome": "Ralph Johnson", "CPF": "12345678964", "Endereco": "Rua 01, 123", "Telefone": "45998453678" }, 
    { "Codigo": "4231", "Nome": "Alan Gomez", "CPF": "12345678964", "Endereco": "Rua 02, 321", "Telefone": "45998453678" }
]);
