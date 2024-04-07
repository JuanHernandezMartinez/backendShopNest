import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  barCode: string;
}
