import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, ProductModule],
})
export class AppModule {}
