import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [TypeOrmModule.forRoot(), OrganizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
