import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserDto {
  id: number;

  @IsNotEmpty({ message: 'El username no puede estar vacío.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  username: string;

  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres.',
  })
  @IsNotEmpty({ message: 'La password no puede estar vacía.' })
  password: string;

  @IsIn(['admin', 'user', 'moderator'], {
    message: 'El rol debe ser admin, user o moderator.',
  }) /// revisar
  role?: string = 'user';
}

export class UpdateUserDto extends PartialType(UserDto) {
  password?: string;
  role?: string;
}
