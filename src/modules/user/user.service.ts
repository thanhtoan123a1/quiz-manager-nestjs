import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register-request.dto';

@Injectable()
export class UserService {
  async doUserRegistration(
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
    return await user.save();
  }
}
