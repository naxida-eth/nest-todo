import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SomeModule } from './some/some.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Some } from './some/entities/some.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

// app.module.ts
// 应用程序的根模块。
@Module({
  imports: [
    ConfigModule.forRoot({
      // 加载.env文件
      envFilePath: ['.env'], // 可以指定多个环境文件，例如：['.env.development', '.env']
      isGlobal: true, // 将ConfigModule注册为全局模块，以便在应用中任何地方都能访问配置
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Some],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    SomeModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }
}
