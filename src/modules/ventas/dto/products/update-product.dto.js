"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UpdateProductDto = void 0;
var base_product_dto_1 = require("./base.product.dto");
var UpdateProductDto = /** @class */ (function (_super) {
    __extends(UpdateProductDto, _super);
    function UpdateProductDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateProductDto;
}(base_product_dto_1.BaseProductDTO));
exports.UpdateProductDto = UpdateProductDto;
