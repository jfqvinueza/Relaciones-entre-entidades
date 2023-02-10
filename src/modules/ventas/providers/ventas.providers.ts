import { DataSource } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { CategoryEntity } from '../entities/category.entity';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';

export const ventaProviders = [
 {
provide: RepositoryEnum.PRODUCT_REPOSITORY,
useFactory: (dataSource: DataSource) =>
dataSource.getRepository(ProductEntity),
inject: [DataSourceEnum.PG_DATA_SOURCE],
 },
 {
 provide: RepositoryEnum.CATEGORY_REPOSITORY,
 useFactory: (dataSource: DataSource) =>
 dataSource.getRepository(CategoryEntity),
  inject: [DataSourceEnum.PG_DATA_SOURCE],
 },
 
];
export enum RepositoryEnum {
 PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY',
 CATEGORY_REPOSITORY = 'CATEGORY_REPOSITORY',
}
export enum DataSourceEnum {
 PG_DATA_SOURCE = 'PG_DATA_SOURCE',
}
