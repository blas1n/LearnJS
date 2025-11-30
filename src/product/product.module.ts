import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductResolver } from './product.resolver';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductResolver],
  imports: [PrismaModule]
})
export class ProductModule {}
