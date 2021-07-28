import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {getUzel, listUzels} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllUzels() {
    try {
        const uzelData = await API.graphql({ query: listUzels });

        return uzelData.data.listUzels.items.map(uzel => {
            return {
                params: {
                    uzel,
                }
            }
        })
    } catch (e) {
        console.log("Error while fetching all uzels")
    }
    return {
        params: {}
    }
}

export async function getUzelData(id) {
    try {
        const uzelData = await API.graphql({query: getUzel, variables: {id: id}});

        return {
            data: uzelData.data.getUzel,
        }
    } catch (e) {
        console.log("Error while fetching uzel data");
    }

    return {
        data: {id: "empty", name: "empty"}
    }
}