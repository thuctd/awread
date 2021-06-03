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
  console.log('process.env', process.env.CYPRESS_INSTALL_BINARY);
  console.log('process.env', process.env.DOKKU_LETSENCRYPT_EMAIL);
  console.log('process.env', process.env.NODE_ENV);
  console.log('environment, buildenvironment', environment, buildEnvironment);
  console.log('WTF why NODE_ENV??', process.env.NODE_ENV, buildEnvironment.NODE_ENV);
  console.log('WTF why NODE_ENV??', Object.keys('process.env'));
  console.log('WTF why NODE_ENV??', Object.values('process.env'));
  console.log('WTF why NODE_ENV??', Object.entries('process.env'));
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  const globalPrefix = 'api';
  app.setGlobalPrefix(`${globalPrefix}`);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
