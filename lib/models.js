import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {listModels} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllModels() {
    const SSR = withSSRContext();
    try {
        const {data} = await SSR.API.graphql({ query: listModels });

        return data.listModels.items.map(model => {
            return {
                params: {
                    model,
                }
            }
        })
    } catch (e) {
        console.log("Error while fetching all models")
    }
    return {
        params: {}
    }
}