import * as types from '../constants/types';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listBrands as listBrandsAws} from "../../graphql/queries";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

export function listBrands() {
    return dispatch => {
        return API.graphql(graphqlOperation(listBrandsAws))
            .then(brandsData => brandsData.data.listBrands.items)
            .then(brandList => {
                dispatch({
                    type: types.brands.LIST,
                    brandList
                })
            })
            .catch(e => console.log("Error while do action listBrands: ", e));
    }
}