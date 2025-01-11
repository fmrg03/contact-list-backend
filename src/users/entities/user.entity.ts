import { Contacts } from 'src/contacts/entities/contact.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 25, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 20 })
  password: string;

  @Column({ type: 'varchar' })
  role: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Contacts, (contact) => contact.user, { cascade: true })
  contacts: Contacts[];
}
