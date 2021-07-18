import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useDispatch} from "react-redux";
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listServices, listUzels} from "../../graphql/queries";
import {getService as getServiceRedux} from "../../redux/actions/service";
import {getUzelList} from "../../redux/actions/uzel";
import awsExports from "../../aws-exports";
import {UzelTabs} from "../../components/Service/uzelTabs";
Amplify.configure(awsExports);

const Services = observer(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchServices();
        fetchUzels();
    }, []);

    const fetchServices = async () => {
        try {
            const servicesData = await API.graphql(graphqlOperation(listServices));
            const services = servicesData.data.listServices.items;
            dispatch(getServiceRedux(services));
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
            console.log("Error while fetching uzels: ", e);
        }
    }

    return(
        <>
            <UzelTabs/>
        </>
    )
})

export default Services;