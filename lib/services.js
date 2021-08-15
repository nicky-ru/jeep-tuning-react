import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {getService, listServices} from "../src/graphql/queries";
Amplify.configure({ ...awsExports});

export async function getAllServices() {
    try {
        const serviceData = await API.graphql({query: listServices});

        return serviceData.data.listServices.items
            .filter(service => {
                return service.uzelID;
            })
            .map(service => {
                return {
                    params: {
                        service,
                    }
                }
        })
    } catch (e) {
        console.log("Error while fetching all services: ", e)
    }
    return {
        params: {}
    }
}

export async function getAllServicesIds() {
    try {
        const serviceData = await API.graphql({query: listServices});

        return serviceData.data.listServices.items
            .filter(service => {
                return service.uzelID;
            })
            .map(service => {
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
        data: {id: "", name: "", description: "", uzelID: "", prices: [], pricesInfo: []}
    }

}