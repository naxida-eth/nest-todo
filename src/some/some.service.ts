import { Injectable } from '@nestjs/common';
import { CreateSomeInput } from './dto/create-some.input';
import { Some } from './entities/some.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ISome } from './entities/interface';
import { UpdateSomeInput } from './dto/update-some.input';

@Injectable()
export class SomeService {
  constructor(
    @InjectRepository(Some)
    private somesRepository: Repository<Some>,
  ) {}

  async create(createSomeInput: CreateSomeInput): Promise<Some> {
    return await this.somesRepository.save(createSomeInput);
  }

  async findAll(): Promise<Some[]> {
    return await this.somesRepository.find();
  }

  async findNotDeleteAll(): Promise<Some[]> {
    return await this.somesRepository.find({ where: { isDelete: false } });
  }

  async findDeleteAll(): Promise<Some[]> {
    return await this.somesRepository.find({ where: { isDelete: true } });
  }

  async findOne(id: ISome['id']) {
    return await this.somesRepository.findOne({ where: { id } });
  }

  update(id: Some['id'], updateSomeInput: UpdateSomeInput) {
    return this.somesRepository.update({ id }, { ...updateSomeInput });
  }

  delete(id: Some['id']) {
    return this.somesRepository.update({ id }, { isDelete: true });
  }
}
