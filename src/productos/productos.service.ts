import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/model/product.entity';

@Injectable()
export class ProductosService {
  public getProducts() {}

  public createProduct(dataProduct: Product): void {}

  public updateProduct(idProduct: number, dataProduct: ProductDTO) {}

  public deleteProduct(idProduct: number): void {}
}
