import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './product.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  create(@Body() createUserDto:any) {
    return 'ok'
  }

  @Get('/get')
  getUserPosts(payload: any): Promise<any>{
    return this.usersService.getUserPosts(payload)
  }


}