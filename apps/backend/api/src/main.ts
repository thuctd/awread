/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import { environment } from '@awread/global/environments';
import { buildEnvironment } from '@awread/global/environments';

async function bootstrap() {
  console.log('environment, buildenvironment', environment, buildEnvironment);
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  const environmentPrefix = buildEnvironment.ENVIRONMENT;
  const globalPrefix = 'api';
  if (environmentPrefix == 'production') {
    app.setGlobalPrefix(`${globalPrefix}`);
  } else {
    app.setGlobalPrefix(`${environmentPrefix}/${globalPrefix}`);
  }
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
