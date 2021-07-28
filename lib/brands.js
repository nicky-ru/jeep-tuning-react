import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {listBrands} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllBrands() {
    try {
        const brandData = await API.graphql({ query: listBrands });

        return brandData.data.listBrands.items.map(brand => {
            return {
                params: {
                    brand,
                }
            }
        })
    } catch (e) {
        console.log("Error while fetching all brands")
    }
    return {
        params: {}
    }
}