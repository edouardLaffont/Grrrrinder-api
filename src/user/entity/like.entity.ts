import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.senderLikes)
  senderUser: User;

  @ManyToOne(() => User, (user) => user.receiverLikes)
  receiverUser: User;

  @Column()
  status: 'pending' | 'match';
}