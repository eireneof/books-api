import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './book.model';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', // usuário do MySQL
      password: 'r**t2486#', // senha do usuário do MySQL
      database: 'bookstore', // nome do banco de dados
      //models: [ Book ] 
      autoLoadModels: true,
      synchronize: true,
    }),

    SequelizeModule.forFeature([Book])
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
