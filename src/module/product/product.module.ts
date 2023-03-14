import { Module } from '@nestjs/common';
import { UsersService } from './product.service';
import { UsersController } from './product.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule {}
