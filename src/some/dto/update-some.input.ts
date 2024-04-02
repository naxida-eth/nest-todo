import { CreateSomeInput } from './create-some.input';
import { InputType, Field } from '@nestjs/graphql';

// PartialType 将createSomeInput中的参数变成可选的
@InputType()
export class UpdateSomeInput extends CreateSomeInput {
  @Field()
  isOk: boolean; // some字段
}
