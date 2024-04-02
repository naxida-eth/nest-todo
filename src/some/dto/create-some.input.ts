import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSomeInput {
  @Field()
  some: string; // some字段
}
