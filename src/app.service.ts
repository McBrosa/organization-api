import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  status(): string {
    return 'Im here <3';
  }
}
