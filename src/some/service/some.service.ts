import { Injectable } from '@nestjs/common';

// 带有单个方法的基本服务
// 一键创建service命令 nest g service service some
@Injectable()
export class SomeService {
  create(): string {
    return 'create some success';
  }
  getByUrlIdSome(param: { id: number }): string {
    return `getByUrlIdSome Service Get the id is ${param.id}`;
  }
  getAllSome(): string {
    return 'Hello World! getAllSome';
  }
  updateSome(): string {
    return 'Hello World! updateSome';
  }
}
