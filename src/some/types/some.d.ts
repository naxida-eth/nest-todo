interface ISome {
  id: number;
  todo: string;
  delete: boolean;
  starttime: number;
  endtime: number;
}

type IListAllEntitiesDto = {
  limit: number;
  page: number;
};
