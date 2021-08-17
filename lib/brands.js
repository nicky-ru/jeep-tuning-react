import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {listBrands} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllBrands() {
    const SSR = withSSRContext();
    try {
        const {data} = await SSR.API.graphql({ query: listBrands });

        return data.listBrands.items.map(brand => {
            return {
                params: {
                    brand,
                }
            }
        })
    } catch (e) {
        console.log("Error while fetching all Brands")
    }
    return {
        params: {}
    }
}