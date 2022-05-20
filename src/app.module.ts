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
      host: 'bkxhco3gu379dtin2ia7-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uwsaxzv6whterugc',
      password: 'pgVeWGqPLOB3sNSfvpMK',
      database: 'bkxhco3gu379dtin2ia7',
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
