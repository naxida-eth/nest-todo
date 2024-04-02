import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SomeService } from './some.service';
import { Some } from './entities/some.entity';
import { CreateSomeInput } from './dto/create-some.input';
import { SomeDetailsOutput } from './dto/some-details.output';

@Resolver('Some')
export class SomeResolver {
  constructor(private readonly someService: SomeService) {}

  @Mutation(() => Some)
  createSome(@Args('createSomeInput') createSomeInput: CreateSomeInput) {
    return this.someService.create(createSomeInput);
  }

  @Query(() => SomeDetailsOutput)
  async getUserDetails(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<SomeDetailsOutput> {
    const some = await this.someService.findOne(userId);
    // 在这里进行从UserEntity到UserDetailsOutput的转换
    return { ...some }; // 示例简化转换
  }

  @Query(() => [SomeDetailsOutput], { name: 'some' })
  findAll() {
    return this.someService.findAll();
  }

  @Query(() => SomeDetailsOutput, { name: 'some' })
  findOne(@Args('id', { type: () => Int }) id: SomeDetailsOutput['id']) {
    return this.someService.findOne(id);
  }

  @Mutation(() => Some)
  updateSome(@Args('updateSomeInput') SomeDetailsOutput: SomeDetailsOutput) {
    return this.someService.update(SomeDetailsOutput.id, SomeDetailsOutput);
  }

  @Mutation(() => Some)
  removeSome(@Args('id', { type: () => Int }) id: SomeDetailsOutput['id']) {
    return this.someService.remove(id);
  }
}
