import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService: ConfigService = app.get(ConfigService);
  app.setGlobalPrefix(configService.get('URL_PREFIX'));
  await app.listen(configService.get('PORT'));
}

bootstrap();
