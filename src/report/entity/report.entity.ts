/* eslint-disable prettier/prettier */
import { User } from 'src/user/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.reports)
  complainentUser: User;

  @Column()
  description: string;

  @Column()
  reportedUserId: string;
}
