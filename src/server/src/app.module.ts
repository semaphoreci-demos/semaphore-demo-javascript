import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiModule } from './api/api.module';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { AdvancedConsoleLogger } from 'typeorm';

const config = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '..', '.env')));

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.DATABASE_HOST,
      port: parseInt(config.DATABASE_PORT, 10),
      username: config.DATABASE_USER,
      password: config.DATABASE_PASSWORD,
      database: config.DATABASE_DBNAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrationsRun: true,
      migrations: ['migration/*.js'],
      cli: {
        migrationsDir: 'migration',
      },
    }),
    ApiModule,
  ],
})
export class AppModule {}
