# Sistema de Informações
Este é um sistema de informações que permite aos usuários gerenciarem informações de pessoas. O sistema foi construído utilizando as seguintes tecnologias:

* Angular
* C#
* MongoDB

## Requisitos
Para usar esta aplicação, você precisará ter instalado em seu computador as seguintes tecnologias:

- [Angular](https://angular.io/)
- [.NET Core](https://dotnet.microsoft.com/pt-br/download)
- [MongoDB](https://www.mongodb.com/try/download/community)

Certifique-se de ter as versões mais recentes instaladas para garantir o funcionamento correto da aplicação.

# Instalação 

## Configurar o MongoDB

Para configurar o MongoDB, siga os passos abaixo:

1. Abra o terminal e inicie o MongoDB.

```
mongo
```
2. Crie o banco de dados "SistemaInfoDb".
```
use SistemaInfoDb
```
3. Crie a coleção "Usuarios".
```
db.createCollection("Usuarios");
```
4. Inserir os dados iniciais.
```
db.Usuarios.insertMany([
    { "Codigo": "1234", "Nome": "Ralph Johnson", "CPF": "12345678964", "Endereco": "Rua 01, 123", "Telefone": "45998453678" }, 
    { "Codigo": "4231", "Nome": "Alan Gomez", "CPF": "12345678964", "Endereco": "Rua 02, 321", "Telefone": "45998453678" }
]);

```

## Instalar as dependência do Server

1. Abra o terminal e acesse o diretório "server".

```
cd server
```

2. Execute os comandos abaixo para instalar as dependências e iniciar o servidor.

```
 dotnet restore && dotnet build && dotnet run
```
## Instalar as dependencia do Client

1. Abra o terminal e acesse o diretório "client".

```
cd server
```

2. Execute o comando abaixo para instalar as dependências.
```shell
npm install
```
3. Inicie o servidor do Angular.


```shell
ng serve
```

