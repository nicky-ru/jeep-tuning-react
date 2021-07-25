import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {getService, getUzel, listServices} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllServicesIds() {
    try {
        const serviceData = await API.graphql({query: listServices});

        return serviceData.data.listServices.items.map(service => {
            return {
                params: {
                    id: service.id,
                }
            }
        })
    } catch (e) {
        console.log("Error while fetching all services ids")
    }
    return {
        params: {
            id: ""
        }
    }
}

export async function getServiceData(id) {
    try {
        const serviceData = await API.graphql({query: getService, variables: {id: id}})
        return {
            data: serviceData.data.getService,
        }
    } catch (e) {
        console.log("Error while fetching service data");
    }
    return {
        data: {id: "", name: "", description: "", uzelID: "", price: 0}
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