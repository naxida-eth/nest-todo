import { Module } from '@nestjs/common';
import { SomeService } from './some.service';
import { SomeResolver } from './some.resolver';
import { Some } from './entities/some.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SomeController } from './some.controller';

@Module({
  providers: [SomeResolver, SomeService],
  imports: [TypeOrmModule.forFeature([Some])],
  controllers: [SomeController],
})
export class SomeModule {}
