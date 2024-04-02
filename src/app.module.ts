import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SomeModule } from './some/some.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Some } from './some/entities/some.entity';
import { GraphQLModule } from '@nestjs/graphql';
// 应用程序的根模块。
@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      include: [SomeModule],
    }),
    TypeOrmModule.forRoot({
      entities: [Some],
      synchronize: true,
    }),
    SomeModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
