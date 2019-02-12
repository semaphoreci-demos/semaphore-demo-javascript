import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import config from './config';

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
