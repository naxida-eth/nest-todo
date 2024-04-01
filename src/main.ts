import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

const ListingPort = 3000;
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  console.log({
    url: `http://localhost:${ListingPort}`,
  });
  await app.listen(ListingPort);
}
bootstrap();
