/* eslint-disable prettier/prettier */
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Picture {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  pictureUrl: string;

}
