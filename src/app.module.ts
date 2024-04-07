import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { FacturasModule } from './facturas/facturas.module';

@Module({
  imports: [ProductosModule, ProveedoresModule, FacturasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
