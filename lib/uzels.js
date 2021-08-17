import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {getUzel, listUzels} from "../src/graphql/queries";
Amplify.configure({ ...awsExports, ssr: true});

export async function getAllUzels() {
    const SSR = withSSRContext();
    try {
        const {data} = await SSR.API.graphql({ query: listUzels });

        return data.listUzels.items.map(uzel => {
            return {
                params: {
                    uzel,
                }
            }
        })
    } catch (e) {
        console.log("Error while fetching all uzels: ", e)
    }
    return {
        params: {}
    }
}

export async function getUzelData(id) {
    const SSR = withSSRContext();
    try {
        const { data } = await SSR.API.graphql({query: getUzel, variables: {id: id}});

        return {
            data: data.getUzel,
        }
    } catch (e) {
        console.log("Error while fetching uzel data");
    }

    return {
        data: {id: "empty", name: "empty"}
    }
}