/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';
  import * as bcrypt from 'bcrypt';
import { Search } from 'src/search/entity/search.entity';
import { Profil } from 'src/profil/entity/profil.entity';
import { Picture } from 'src/picture/entity/picture.entity';
import { Report } from 'src/report/entity/report.entity';
import { Like } from 'src/like/entity/like.entity';
  
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

    @OneToMany(() => Report, (report) => report.complainentUser)
    reports: Report[]

    @OneToMany(() => Like, (like) => like.receiverUser)
    receiverLikes: Like[]

    @OneToMany(() => Like, (like) => like.senderUser)
    senderLikes: Like[]
  
    async validatePassword(password: string): Promise<boolean> {
      const hash = await bcrypt.hash(password, this.salt);
      return hash === this.password;
    }
  }