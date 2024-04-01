import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SomeService } from '../service/some.service';
import { ListAllEntitiesDto, SomeDto } from '../some.dto';

// 一键创建controller命令 nest g controller controller some
@Controller('some')
export class SomeController {
  constructor(private readonly someService: SomeService) {}

  @Post('create')
  async create(@Body() someDto: SomeDto): Promise<string> {
    /* 
    {
      todo: 'working web3',
      delete: 'false',
      starttime: 1711960270,
      endtime: 1712046682,
    }
    */
    console.log({
      someDto,
    });
    return this.someService.create();
  }

  @Get(':id')
  getByUrlIdSome(@Param() param: SomeDto): string {
    return this.someService.getByUrlIdSome(param);
  }

  @Get()
  getAllSome(@Query() { limit = 10, page }: ListAllEntitiesDto): string {
    console.log({
      key: 'getSome',
      limit: typeof limit === 'number' ? limit : Number(limit),
      page: Number(page),
    });
    return this.someService.getAllSome();
  }
}
