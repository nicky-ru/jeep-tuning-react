import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {listModels} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllModels() {
    try {
        const modelData = await API.graphql({ query: listModels });

        return modelData.data.listModels.items.map(model => {
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