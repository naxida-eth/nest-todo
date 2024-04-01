export class SomeDto implements ISome {
  readonly id: number;
  todo: string;
  delete: boolean = false;
  starttime: number;
  endtime: number;
}

export class ListAllEntitiesDto implements IListAllEntitiesDto {
  limit: number = 10;
  page: number;
}
