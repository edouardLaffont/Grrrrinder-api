/* eslint-disable prettier/prettier */
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Search {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  kind: 'chat' | 'chien';

  @Column()
  sex: 'mâle' | 'femelle';

  @Column()
  ageRange: [number, number];

  @Column()
  city: string;

  @Column()
  domestic: boolean;

}
