import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {getService, getUzel, listServices} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllServicesIds() {
    const serviceData = await API.graphql({query: listServices});

    return serviceData.data.listServices.items.map(service => {
        return {
            params: {
                id: service.id,
            }
        }
    })
}

export async function getServiceData(id) {
    const serviceData = await API.graphql({query: getService, variables: {id: id}})
    return {
        data: serviceData.data.getService,
    }
}

export async function getUzelData(id) {
    const uzelData = await API.graphql({query: getUzel, variables: {id: id}});

    return {
        data: uzelData.data.getUzel,
    }
}