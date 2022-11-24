/* eslint-disable prettier/prettier */
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Profil {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  kind: 'chat' | 'chien';

  @Column()
  sex: 'mâle' | 'femelle';

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  domestic: boolean;

}