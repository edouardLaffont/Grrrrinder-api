/* eslint-disable prettier/prettier */
import { Message } from 'src/message/entity/message.entity';
import { User } from 'src/user/entity/user.entity';
import {
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
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
