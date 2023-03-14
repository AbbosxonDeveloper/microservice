import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { UsersModule } from './module/users/product.module';

@Module({
  imports: [ConfigModule.forRoot(config), UsersModule],
})
export class AppModule {}
