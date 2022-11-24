/* eslint-disable prettier/prettier */
import { Conversation } from 'src/conversation/entity/conversation.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages)
  conversation: Conversation;

  @Column()
  content: string;

  @Column()
  senderId: string;
}
