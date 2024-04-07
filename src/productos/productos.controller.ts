import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/model/product.entity';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private productService: ProductosService) {}

  @Get()
  public getProducts() {
    this.productService.getProducts();
  }

  @Post()
  public createProduct(@Body() dataProduct: Product): void {
    this.productService.createProduct(dataProduct);
  }

  @Put()
  public updateProduct(
    @Param() idProduct: number,
    @Body() dataProduct: ProductDTO,
  ) {
    this.productService.updateProduct(idProduct, dataProduct);
  }

  @Delete()
  public deleteProduct(@Param() idProduct: number): void {
    this.productService.deleteProduct(idProduct);
  }
}
