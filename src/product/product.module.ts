import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],

  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
