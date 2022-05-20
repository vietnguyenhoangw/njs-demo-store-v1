import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'description', type: 'varchar', length: 1000 })
  description: string;

  @Column({ name: 'createdDate', type: 'varchar' })
  createdDate: string;

  @Column({ name: 'productImage', type: 'tinytext' })
  productImage: string;

  @Column({ name: 'productImageList', type: 'tinytext' })
  productImageList: string;
}
