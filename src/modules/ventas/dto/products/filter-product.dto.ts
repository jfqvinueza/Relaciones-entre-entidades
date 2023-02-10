import { isString } from "util";
import { BaseProductDTO } from "./base.product.dto";

export class FilterProductDto extends PaginationDto{
    @IsOptional()
    @IsString()
    readonly title:string;

    @IsOptional()
    @IsNumber()
    readonly categoryId: number;
}