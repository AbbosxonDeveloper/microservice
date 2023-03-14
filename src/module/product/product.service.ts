import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(){}

  async getUserPosts(userId: string): Promise<any>{
    
  }
}
