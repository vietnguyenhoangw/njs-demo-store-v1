import { Controller, Get } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getLevel(): Promise<ProductEntity[]> {
    return this.productService.getAllProduct();
  }
}
