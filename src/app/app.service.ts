import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(`${process.env.HOST}:${process.env.PORT}`);
    return 'Hello CARD API!';
  }
}
