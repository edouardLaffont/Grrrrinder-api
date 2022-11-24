/* eslint-disable prettier/prettier */
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Search {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  kind: 'cat' | 'dog';

  @Column()
  sex: 'male' | 'female';

  @Column()
  ageRange: [number, number];

  @Column()
  city: string;

  @Column()
  domestic: boolean;

}
