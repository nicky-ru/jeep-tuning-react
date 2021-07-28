import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {listAdvantages} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllAdvantages() {
    try {
        const advantageData = await API.graphql({ query: listAdvantages });

        return advantageData.data.listAdvantages.items.map(advantage => {
            return {
                params: {
                    advantage,
                }
            }
        })
    } catch (e) {
        console.log("Error while fetching all advantages")
    }
    return {
        params: {}
    }
}