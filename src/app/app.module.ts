import { Module } from '@nestjs/common';
import { envConfig } from '../config/env.config';

@Module({
  imports: [envConfig],
  controllers: [],
  providers: [],
})
export class AppModule {}
