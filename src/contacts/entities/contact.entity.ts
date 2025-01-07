import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsString({ message: 'El nombre debe ser una cadena de texto valida.' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
  name: string;

  @Column()
  @IsString({ message: 'El apellido debe ser una cadena de texto.' })
  @IsOptional()
  lastName: string;

  @Column()
  @IsOptional()
  cellphone: string;

  @Column()
  @IsOptional()
  @IsString({ message: 'El alias debe ser una cadena de texto.' })
  alias: string;

  @Column()
  user_id: number;

  @Column()
  @IsBoolean()
  @IsOptional()
  whatsapp: boolean = false;

  @Column()
  @IsOptional()
  image: string;

  @Column()
  @IsEmail({ require_tld: true }, { message: 'Debe proporcionar un correo electrónico válido.' })
  @IsOptional()
  email: string;

  @Column()
  @IsOptional()
  category: string = 'contactos';

  @Column()
  @IsDate({ message: 'La fecha debe ser un valor de tipo Date válido.' })
  created_at: Date;
}
