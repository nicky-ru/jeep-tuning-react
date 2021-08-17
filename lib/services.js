import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {getService, listServices, listServicesIds, listServicesNames} from "../src/graphql/queries";
Amplify.configure({ ...awsExports, ssr: true});

export async function getAllServices() {
    const SSR = withSSRContext();
    try {
        const {data} = await SSR.API.graphql({query: listServices});

        return data.listServices.items
            // .filter(service => {
            //     return service.uzelID;
            // })
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
        params: []
    }
}

export async function getAllServicesNames() {
    const SSR = withSSRContext();
    try {
        const {data} = await SSR.API.graphql({query: listServicesNames});

        return data.listServices.items
            // .filter(service => {
            //     return service.uzelID;
            // })
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
        params: []
    }
}

export async function getAllServicesIds() {
    const SSR = withSSRContext();
    try {
        const { data } = await SSR.API.graphql({query: listServicesIds});

        return data.listServices.items
            // .filter(service => {
            //     return service.uzelID;
            // })
            .map((service) => {
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
    const SSR = withSSRContext();
    try {
        const { data } = await SSR.API.graphql({query: getService, variables: {id: id}})
        return {
            data: data.getService,
        }
    } catch (e) {
        console.log("Error while fetching service data");
    }
    return {
        data: {id: "", name: "", description: "", uzelID: "", prices: [], pricesInfo: []}
    }

}