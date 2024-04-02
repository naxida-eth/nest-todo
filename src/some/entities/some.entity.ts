import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

/**
 * Some实体类
 * 用于ORM映射，代表数据库中的some表
 */
@Entity()
export class Some {
  @PrimaryGeneratedColumn()
  id: number; // 主键，自增长

  @Column()
  some: string; // some字段

  @UpdateDateColumn()
  updateTime: Date; // 更新时间

  @CreateDateColumn()
  createTime: Date; // 创建时间

  @Column({ default: false })
  isDelete: boolean; // 是否删除标志

  @Column({ default: false })
  isOk: boolean; // 是否完成

  @DeleteDateColumn()
  deleteTime: Date; // 删除时间

  /**
   * 插入前的钩子方法
   * 用于在插入实体前设置创建时间
   */
  @BeforeInsert()
  insertCreateTime = () => {
    this.createTime = new Date();
  };

  /**
   * 更新前的钩子方法
   * 用于在实体更新前设置更新时间，如果设置了删除标志为true且删除时间未设置，则设置删除时间
   */
  @BeforeUpdate()
  updateChangeTime = () => {
    this.updateTime = new Date();
    if (this.isDelete && !this.deleteTime) {
      this.deleteTime = new Date();
    }
  };
}
