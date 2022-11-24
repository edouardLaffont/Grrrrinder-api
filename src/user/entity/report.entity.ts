import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.report)
  complainentUser: User;

  @Column()
  description: string;

  @Column()
  reportedUserId: string;
}
