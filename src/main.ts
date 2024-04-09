import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as cors from 'cors';

const ListingPort = 3000;
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // 全局启用 CORS，使用默认配置或自定义配置
  app.use(cors());

  // 如果需要自定义 CORS 配置，可以传递一个配置对象给 cors() 函数
  const corsOptions = {
    origin: [process.env.NEXT_PUBLIC_CORS_ORIGIN], // 允许的源列表
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的方法
    allowedHeaders: ['Content-Type', 'Authorization'], // 允许的请求头
    credentials: true, // 允许携带 cookie
    // ...其他配置项
  };

  app.use(cors(corsOptions));

  console.log({
    url: `http://localhost:${ListingPort}`,
  });
  await app.listen(ListingPort);
}
bootstrap();
