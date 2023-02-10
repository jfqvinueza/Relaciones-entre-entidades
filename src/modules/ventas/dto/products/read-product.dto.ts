import { BaseProductDTO } from "./base.product.dto";
@Exclude()
export class ReadProductDto extends BaseProductDTO{
    
    @Expose()
    readonly title;

    @Expose()
    readonly price;

    @Expose()
    readonly categoryId;

}