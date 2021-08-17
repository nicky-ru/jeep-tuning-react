import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {listAdvantages} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllAdvantages() {
    const SSR = withSSRContext();
    try {
        const {data} = await SSR.API.graphql({ query: listAdvantages });

        return data.listAdvantages.items.map(advantage => {
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