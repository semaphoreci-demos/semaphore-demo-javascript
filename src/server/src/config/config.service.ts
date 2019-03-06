import * as Joi from 'joi';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { DatabaseType } from 'typeorm';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi
        .string()
        .valid(['development', 'production', 'test', 'provision', 'ci'])
        .default('development'),
      PORT: Joi
        .number()
        .default(3001),
      URL_PREFIX: Joi
        .string()
        .default('v1/api'),
      DATABASE_TYPE: Joi
        .string()
        .valid(['postgres'])
        .default('postgres'),
      DATABASE_HOST: Joi
        .string()
        .default('localhost'),
      DATABASE_PORT: Joi
        .number()
        .default(5432),
      DATABASE_USER: Joi
        .string()
        .default('postgres'),
      DATABASE_PASSWORD: Joi
        .string()
        .allow('')
        .allow(null),
      DATABASE_DBNAME: Joi
        .string()
        .default('postgres'),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  createTypeOrmOptions() {
    return {
      type: 'postgres' as 'postgres',
      host: this.get('DATABASE_HOST'),
      port: parseInt(this.get('DATABASE_PORT'), 10),
      username: this.get('DATABASE_USER'),
      password: this.get('DATABASE_PASSWORD'),
      database: this.get('DATABASE_DBNAME'),
      entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrationsRun: true,
      migrations: [__dirname + '/../migration/*{.ts,.js}'],
      cli: {
        migrationsDir: 'migration',
      },
      extra: {
        ssl: this.get('NODE_ENV') === 'production'
          ? true
          : false,
      },
    };
  }
}
