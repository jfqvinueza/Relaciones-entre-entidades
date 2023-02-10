"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BaseProductDTO = void 0;
var decorators_1 = require("class-validator/types/decorator/decorators");
var validation_message_ts_1 = require("../../shared/validation.ts/validation-message.ts");
var BaseProductDTO = /** @class */ (function () {
    function BaseProductDTO() {
    }
    __decorate([
        (0, decorators_1.IsNotEmpty)((0, validation_message_ts_1.isNotEmptyValidationOptions)()),
        (0, decorators_1.IsString)((0, validation_message_ts_1.isStringValidationOptions)())
    ], BaseProductDTO.prototype, "title");
    __decorate([
        (0, decorators_1.IsNotEmpty)((0, validation_message_ts_1.isNotEmptyValidationOptions)()),
        (0, decorators_1.IsNumber)((0, validation_message_ts_1.isNumberValidationOptions)()),
        (0, decorators_1.IsPositive)((0, validation_message_ts_1.isPositiveValidationOptions)())
    ], BaseProductDTO.prototype, "price");
    __decorate([
        (0, decorators_1.IsNotEmpty)((0, validation_message_ts_1.isNotEmptyValidationOptions)()),
        (0, decorators_1.IsString)((0, validation_message_ts_1.isStringValidationOptions)())
    ], BaseProductDTO.prototype, "descripcion");
    __decorate([
        (0, decorators_1.IsNotEmpty)((0, validation_message_ts_1.isNotEmptyValidationOptions)()),
        (0, decorators_1.IsInt)((0, validation_message_ts_1.isIntValidationOptions)()),
        (0, decorators_1.IsPositive)((0, validation_message_ts_1.isPositiveValidationOptions)())
    ], BaseProductDTO.prototype, "categoryId");
    __decorate([
        (0, decorators_1.IsArray)((0, validation_message_ts_1.isArrayValidationOptions)()),
        (0, decorators_1.ArrayNotEmpty)((0, validation_message_ts_1.arrayValidationOptions)())
    ], BaseProductDTO.prototype, "images");
    return BaseProductDTO;
}());
exports.BaseProductDTO = BaseProductDTO;
