import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const options = new DocumentBuilder()
    .setTitle('Organization')
    .setDescription('CRUD API')
    .setVersion('1.0')
    .addTag('organizations')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(+configService.get<number>('APP_PORT'));
}
bootstrap();
