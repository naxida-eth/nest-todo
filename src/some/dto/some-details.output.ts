import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SomeDetailsOutput {
  @Field(() => Int)
  id: number;

  @Field()
  some: string; // some字段

  @Field()
  updateTime: Date; // 更新时间

  @Field()
  createTime: Date; // 创建时间

  @Field()
  isDelete: boolean; // 是否删除标志

  @Field()
  isOk: boolean; // 是否完成

  @Field()
  deleteTime: Date; // 删除时间

  // 可以选择性地暴露部分实体属性，也可以添加额外的计算属性等
}
