import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import initialState from "../../constants/initialState";
import * as types from '../../constants/types';
import {getServiceById, listServices, setServiceSearch} from "./services";
import {createError} from "../error";
import {getUzelById} from "../uzels";


import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {getService as getServiceAws, listServices as listServicesAws} from "../../../graphql/queries";
import awsExports from "../../../aws-exports";
Amplify.configure(awsExports);
jest.mock("aws-amplify");

// jest.mock("../../../graphql/queries");

const mockStore = configureStore([thunk]);

describe('service actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState)
    });
    // test('getServiceById', async () => {
    //
    // })
    // test('listServices', async () => {
    //     const services = [{content: "great stuff"}];
    //     API.graphql(graphqlOperation(listServicesAws)) = jest.fn(() => {
    //         return Promise.resolve({
    //             json: () => Promise.resolve(services)
    //         })
    //     });
    //     await store.dispatch(listServices());
    //     const actions = store.getActions();
    //     const expectedActions = [{type: types.services.LIST, services}];
    //     expect(actions).toEqual(expectedActions);
    // })
    test('setServiceSearch',  () => {
        const keyWord = "test";
        const actual = setServiceSearch(keyWord);
        const expected = {type: types.serviceSearch.SET, keyWord};
        expect(actual).toEqual(expected);
    })
})