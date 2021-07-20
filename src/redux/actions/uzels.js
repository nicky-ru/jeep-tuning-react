import * as types from '../constants/types';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listUzels, getUzel} from "../../graphql/queries";
import awsExports from "../../aws-exports";
import {createError} from "./error";
Amplify.configure(awsExports);

export function getUzelList() {
    return dispatch => {
        return API.graphql(graphqlOperation(listUzels))
            .then(uzelsData => uzelsData.data.listUzels.items)
            .then(uzelList => {
                dispatch({
                    type: types.uzels.GET_LIST,
                    uzelList
                })
            })
            .catch(e => dispatch(createError(e)));
    };
}

export function getUzelById(uzelId) {
    return dispatch => {
        return API.graphql(graphqlOperation(getUzel, {id: uzelId}))
            .then(uzelData => uzelData.data.getUzel)
            .then(uzel => {
                dispatch({
                    type: types.uzels.GET,
                    uzel
                })
            })
            .catch(e => dispatch(createError(e)));
    };
}