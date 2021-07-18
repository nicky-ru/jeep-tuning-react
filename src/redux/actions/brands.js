import * as types from '../constants/types';

export function listBrands(brandList) {
    return {
        type: types.brands.LIST,
        brandList
    };
}