import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/model/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  public async getProducts(): Promise<Product[]> {
    let productos = await this.productsRepository.find();
    console.log(productos);
    if (productos.length > 0) {
      return productos;
    }
    return;
  }

  public createProduct(dataProduct: Product): void {}

  public updateProduct(idProduct: number, dataProduct: ProductDTO) {}

  public deleteProduct(idProduct: number): void {}
}
