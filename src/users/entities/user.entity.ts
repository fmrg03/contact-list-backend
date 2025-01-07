import { IsDate, IsIn, IsNotEmpty, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsNotEmpty({ message: 'El username no puede estar vacío.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  username: string;

  @Column()
  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres.',
  })
  @IsNotEmpty({ message: 'La password no puede estar vacía.' })
  password: string;

  @Column()
  @IsIn(['admin', 'user', 'moderator'], {
    message: 'El rol debe ser admin, user o moderator.',
  }) /// revisar
  role: string = 'user';

  @Column()
  @IsDate({ message: 'La fecha debe ser un valor de tipo Date válido.' })
  created_at: Date;
}
