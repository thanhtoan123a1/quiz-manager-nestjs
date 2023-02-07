import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  };
  getSendBack(): string {
    return 'Send back something!';
  }
}
