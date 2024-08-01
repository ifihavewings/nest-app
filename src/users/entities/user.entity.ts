import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'gender' })
  gender: 'male' | 'female' | 'other';

  @Column({ name: 'level', default: 1 })
  level: number;

  @Column({ name: 'deactivated', default: false })
  deactivated: boolean;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
