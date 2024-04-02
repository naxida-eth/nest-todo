import { ISome } from './interface';

export const testSome = (id: ISome['id']): ISome => {
  return {
    id, // 主键，自增长
    some: 'do some', // some字段
    updateTime: new Date(), // 更新时间
    createTime: new Date(), // 创建时间
    isDelete: false, // 是否删除标志
    isOk: false, // 是否完成
    deleteTime: new Date(), // 删除时间
  };
};
