import { PartialType } from '@nestjs/mapped-types';

import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class ContactDto {
  id: string;

  @IsString({ message: 'El nombre debe ser una cadena de texto valida.' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
  name: string;

  @IsString({ message: 'El apellido debe ser una cadena de texto.' })
  @IsOptional()
  lastName: string;

  @IsOptional()
  phoneNumber: string;

  @IsOptional()
  @IsString({ message: 'El alias debe ser una cadena de texto.' })
  alias: string;

  user_id: number;

  @IsBoolean()
  @IsOptional()
  whatsapp: boolean = false;

  @IsOptional()
  image: string;

  @IsEmail(
    { require_tld: true },
    { message: 'Debe proporcionar un correo electrónico válido.' },
  )
  @IsOptional()
  email: string;

  @IsOptional()
  category: string = 'contactos';
}

export class UpdateContactDto extends PartialType(ContactDto) {}
