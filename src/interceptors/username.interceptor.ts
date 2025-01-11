import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users/services/users.service';

@Injectable()
export class usernameInterceptor implements NestInterceptor {
  constructor(private readonly usersService: UsersService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { body } = request;

    // Validar si el username ya existe
    if (body.username) {
      const existingUser = await this.usersService.findByUsername(body.username);
      if (existingUser) {
        throw new BadRequestException('Username already exists');
      }
    }
    // Permitir que la solicitud continúe
    return next.handle();
  }
}
