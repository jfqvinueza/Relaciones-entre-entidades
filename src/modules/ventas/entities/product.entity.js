"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductEntity = void 0;
var typeorm_1 = require("typeorm");
var ProductEntity = /** @class */ (function () {
    function ProductEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('sv')
    ], ProductEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            name: 'create_date',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
        //nombre del atributo
    ], ProductEntity.prototype, "createAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            name: 'update_date',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], ProductEntity.prototype, "updateAt");
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            name: 'delete_date',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], ProductEntity.prototype, "deleteAt");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'title',
            comment: 'titulo'
        })
    ], ProductEntity.prototype, "title");
    ProductEntity = __decorate([
        (0, typeorm_1.Entity)('products', { schema: 'ventas' })
    ], ProductEntity);
    return ProductEntity;
}());
exports.ProductEntity = ProductEntity;
//title precio descripcion images
