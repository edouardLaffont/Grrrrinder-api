/* eslint-disable prettier/prettier */
import { User } from 'src/user/entity/user.entity';
import {
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Message } from './message.entity';
  
  @Entity()
  export class Conversation {
    @PrimaryGeneratedColumn()
    id: string;
  
    @OneToMany(() => Message, (message) => message.conversation)
    messages: Message[];
  
    @ManyToMany(() => User)
    @JoinTable()
    user: User[];
  }