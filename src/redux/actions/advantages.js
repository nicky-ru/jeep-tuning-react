import * as types from '../constants/types';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listAdvantages as listAdvantagesAws} from "../../graphql/queries";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

export function listAdvantages() {
    return dispatch => {
        return API.graphql(graphqlOperation(listAdvantagesAws))
            .then(advantagesData => advantagesData.data.listAdvantages.items)
            .then(advantagesList => {
                dispatch({
                    type: types.advantages.LIST,
                    advantagesList
                })
            })
            .catch(e => console.log("Error while do action listAdvantages: ", e));
    }
}