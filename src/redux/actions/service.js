import * as types from '../constants/types';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {getService as getServiceAws} from "../../graphql/queries";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

export function getServiceById(serviceId) {
    return dispatch => {
        return API.graphql(graphqlOperation(getServiceAws, {id: serviceId}))
            .then(serviceData => serviceData.data.getService)
            .then(service => {
                dispatch({
                    type: types.services.GET,
                    service
                })
            })
            .catch(e => console.log("Error while do action getService: ", e));
    };
}
