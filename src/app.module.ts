import { Module } from '@nestjs/common';
import { SomeController } from './some/controller/some.controller';
import { SomeService } from './some/service/some.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';

// 应用程序的根模块。
@Module({
  imports: [UsersModule],
  controllers: [AppController, SomeController],
  providers: [SomeService],
})
export class AppModule {}
