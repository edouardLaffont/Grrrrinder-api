/* eslint-disable prettier/prettier */
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Profil {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  kind: 'cat' | 'dog';

  @Column()
  sex: 'male' | 'female';

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  domestic: boolean;

}