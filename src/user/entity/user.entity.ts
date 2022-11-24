/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';
  import * as bcrypt from 'bcrypt';
import { Search } from 'src/search/entity/search.entity';
import { Profil } from 'src/profil/entity/profil.entity';
import { Picture } from 'src/picture/entity/picture.entity';
  
  @Entity()
  @Unique(['username'])
  export class User  {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    username: string;
  
    @Column()
    password: string;
  
    @Column()
    salt: string;
  
    @Column()
    is_blocked: boolean;

    @Column()
    is_admin: boolean;
  
    @OneToOne(() => Search)
    @JoinColumn()
    search: Search

    @OneToOne(() => Profil)
    @JoinColumn()
    profil: Profil

    @OneToOne(() => Picture)
    @JoinColumn()
    picture: Picture
  
    async validatePassword(password: string): Promise<boolean> {
      const hash = await bcrypt.hash(password, this.salt);
      return hash === this.password;
    }
  }