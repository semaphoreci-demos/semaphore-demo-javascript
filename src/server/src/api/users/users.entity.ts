import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 100 })
  username: string;

  @Column('text') description: string;
}
