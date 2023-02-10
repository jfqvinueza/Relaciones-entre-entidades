import { ArrayNotEmpty, IsArray, IsInt, IsPositive, IsString, IsNumber, IsNotEmpty} from "class-validator/types/decorator/decorators";
import { isNotEmptyValidationOptions, 
    isStringValidationOptions, 
    isNumberValidationOptions,
    isPositiveValidationOptions, 
    isIntValidationOptions, 
    isArrayValidationOptions, 
    arrayValidationOptions} from "../../shared/validation.ts/validation-message.ts";
import { CategoryEntity } from "../../entities/category.entity";

export class BaseProductDTO{
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString (isStringValidationOptions())
    readonly title:string;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsNumber(isNumberValidationOptions())
    @IsPositive(isPositiveValidationOptions())
    readonly price:number;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString (isStringValidationOptions())
    readonly descripcion:string;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsInt(isIntValidationOptions())
    @IsPositive(isPositiveValidationOptions())
    readonly categoryId:CategoryEntity;


    @IsArray(isArrayValidationOptions())
    @ArrayNotEmpty(arrayValidationOptions())
    readonly images:string[];

}