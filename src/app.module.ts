import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { FacturasModule } from './facturas/facturas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './model/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'shop',
      entities: [Product],
    }),
    ProductosModule,
    ProveedoresModule,
    FacturasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
