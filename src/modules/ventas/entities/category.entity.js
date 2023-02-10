"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryEntity = void 0;
var typeorm_1 = require("typeorm");
var product_entity_1 = require("./product.entity");
var CategoryEntity = /** @class */ (function () {
    function CategoryEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('sv')
    ], CategoryEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            name: 'create_date',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
        //nombre del atributo
    ], CategoryEntity.prototype, "createAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            name: 'update_date',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], CategoryEntity.prototype, "updateAt");
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            name: 'delete_date',
            type: 'timestamptz',
            nullable: true
        })
    ], CategoryEntity.prototype, "deleteAt");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_entity_1.ProductEntity; }, (product) = product.categories)
    ], CategoryEntity.prototype, "products");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'name',
            unique: true,
            comment: 'nombre de la categoria'
        })
    ], CategoryEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)('text', {
            name: 'description',
            nullable: true,
            comment: 'descripcion de la categoria'
        })
    ], CategoryEntity.prototype, "descrition");
    CategoryEntity = __decorate([
        (0, typeorm_1.Entity)('categories', { schema: 'ventas' })
    ], CategoryEntity);
    return CategoryEntity;
}());
exports.CategoryEntity = CategoryEntity;
