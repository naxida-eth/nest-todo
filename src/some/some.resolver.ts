import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SomeService } from './some.service';
import { CreateSomeInput } from './dto/create-some.input';
import { SomeOutput } from './dto/some-output';
import { UpdateSomeInput } from './dto/update-some.input';

@Resolver('Some')
export class SomeResolver {
  constructor(private readonly someService: SomeService) {}

  @Mutation(() => SomeOutput)
  createSome(@Args('createSomeInput') createSomeInput: CreateSomeInput) {
    return this.someService.create(createSomeInput);
  }

  @Query(() => [SomeOutput])
  async findAll(): Promise<SomeOutput[]> {
    return this.someService.findAll();
  }

  @Query(() => SomeOutput)
  async findOne(
    @Args('id', { type: () => Int }) id: SomeOutput['id'],
  ): Promise<SomeOutput> {
    return this.someService.findOne(id);
  }

  @Query(() => [SomeOutput])
  async findNotDeleteAll(): Promise<SomeOutput[]> {
    return this.someService.findNotDeleteAll();
  }

  @Query(() => [SomeOutput], { name: 'findDeleteAll' })
  async findDeleteAll(): Promise<SomeOutput[]> {
    return this.someService.findDeleteAll();
  }

  @Mutation(() => SomeOutput)
  async updateSome(
    @Args('id', { type: () => Int }) id,
    @Args('UpdateSomeInput') updateSomeInput: UpdateSomeInput,
  ) {
    return this.someService.update(id, updateSomeInput);
  }

  @Mutation(() => SomeOutput)
  async removeSome(@Args('id', { type: () => Int }) id: SomeOutput['id']) {
    return this.someService.delete(id);
  }
}
