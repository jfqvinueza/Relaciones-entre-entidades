"use strict";
exports.__esModule = true;
exports.DataSourceEnum = exports.RepositoryEnum = exports.ventaProviders = void 0;
var product_entity_1 = require("../entities/product.entity");
var category_entity_1 = require("../entities/category.entity");
var repository_enum_1 = require("../../../../../../../../../../src/shared/enums/repository.enum");
exports.ventaProviders = [
    {
        provide: repository_enum_1.RepositoryEnum.PRODUCT_REPOSITORY,
        useFactory: function (dataSource) {
            return dataSource.getRepository(product_entity_1.ProductEntity);
        },
        inject: [DataSourceEnum.PG_DATA_SOURCE]
    },
    {
        provide: repository_enum_1.RepositoryEnum.CATEGORY_REPOSITORY,
        useFactory: function (dataSource) {
            return dataSource.getRepository(category_entity_1.CategoryEntity);
        },
        inject: [DataSourceEnum.PG_DATA_SOURCE]
    },
];
var RepositoryEnum;
(function (RepositoryEnum) {
    RepositoryEnum["PRODUCT_REPOSITORY"] = "PRODUCT_REPOSITORY";
    RepositoryEnum["CATEGORY_REPOSITORY"] = "CATEGORY_REPOSITORY";
})(RepositoryEnum = exports.RepositoryEnum || (exports.RepositoryEnum = {}));
var DataSourceEnum;
(function (DataSourceEnum) {
    DataSourceEnum["PG_DATA_SOURCE"] = "PG_DATA_SOURCE";
})(DataSourceEnum = exports.DataSourceEnum || (exports.DataSourceEnum = {}));
