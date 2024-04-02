export interface ISome {
  id: number; // 主键，自增长

  some: string; // some字段

  updateTime: Date; // 更新时间

  createTime: Date; // 创建时间

  isDelete: boolean; // 是否删除标志

  isOk: boolean; // 是否完成

  deleteTime: Date; // 删除时间
}
