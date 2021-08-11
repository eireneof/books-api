# Bookstore API

Esse projeto objetivou a criação de uma API REST utilizando [NestJS](https://docs.nestjs.com/) como framework e o [MySQL](https://www.mysql.com/) para o banco de dados. Para isso, foi simulado um sistema de um livraria para atender os seguintes requisitos:

 . | tipo | descrição
-------- | ----- | --------
id       | *number* | identificador único, gerado sequencialmente e de forma sequencial no cadastro de um produto
código    | *string* | código de referência do produto
nome     | *string* | nome do produto
preço de venda | *number* (com precisão de duas casas decimais) | preço de venda do produto

Para a integração com o banco de dados foi utilizado o [sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration) (porém, na versão  5.22.3). Caso queira testar a API com um banco de dados próprio, você pode alterar o código adicionando as informações do seu próprio banco em `app.module.ts`:

```typescript

    SequelizeModule.forRoot({
      dialect: 'mysql', 
      host: 'localhost', 
      port: 3306, //porta utilizada, essa é a padrão do MySQL
      username: process.env.USER_DATA_BASE, // usuário do MySQL
      password: process.env.PASSWORD_DATA_BASE, // senha do usuário do MySQL
      database: 'bookstore', // nome do banco de dados
      autoLoadModels: true,
      synchronize: true,
    }),

```

**CRUD**:
  * Create `http://localhost:3000/books`
  * Read (by *id*) `http://localhost:3000/books/id`
  * Update `http://localhost:3000/books`
  * Delete `http://localhost:3000/books/id`



## Instalação

```bash
$ npm install
```

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
