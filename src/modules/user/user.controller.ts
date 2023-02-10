import { User } from './user.entity';
import { Body, Controller, Post } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { UserRegisterRequestDto } from './dto/user-register-request.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE) userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    return await this.userService.doUserRegistration(userRegister);
  }
}
