import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Connection } from 'typeorm/connection/Connection';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql6.freemysqlhosting.net',
      port: 3306,
      username: 'sql6494018',
      password: 'V5gDku7TWy',
      database: 'sql6494018',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
