import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";

import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {getService, listUzels} from "../../graphql/queries";
import {getService as getServiceRedux} from "../../redux/actions/service";
import {getUzelList} from "../../redux/actions/uzel";

import awsExports from "../../aws-exports";
import {ServiceInfo} from "../../components/Service";
Amplify.configure(awsExports);

export const Service = observer(() => {
    let { slug } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchService();
        fetchUzels();
    }, []);

    const fetchService = async () => {
        try {
            const serviceData = await API.graphql(graphqlOperation(getService, {id: slug}));
            const service = serviceData.data.getService;
            dispatch(getServiceRedux(service));
        } catch (e) {
            console.log("Error while getting services: ", e);
        }
    }
    const fetchUzels = async () => {
        try {
            const uzelsData = await API.graphql(graphqlOperation(listUzels));
            const uzels = uzelsData.data.listUzels.items;
            dispatch(getUzelList(uzels));
        } catch (e) {
            console.log("Error while getting services: ", e);
        }
    }

    return(
        <>
            <ServiceInfo/>
        </>
    )
})