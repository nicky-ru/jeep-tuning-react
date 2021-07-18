import React, {useEffect, Suspense, lazy} from "react";
import {observer} from "mobx-react-lite";
import {useDispatch} from "react-redux";
import {Divider, Container} from "@chakra-ui/layout";
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listServices} from "../../graphql/queries";
import awsExports from "../../aws-exports";
import {listServices as listServicesFromStore} from "../../redux/actions/services";
Amplify.configure(awsExports);

const SearchBar = lazy(() => import("../../components/Service/searchBar"));
const ServiceList = lazy(() => import("../../components/Service/serviceSearchList"));

const Services = observer(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const servicesData = await API.graphql(graphqlOperation(listServices));
            const services = servicesData.data.listServices.items;
            dispatch(listServicesFromStore(services));
        } catch (e) {
            console.log("Error while getting services: ", e);
        }
    }

    return(
        <Container maxW={"container.lg"} mt={'1rem'}>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchBar/>
                <Divider my={"1rem"}/>
                <ServiceList/>
            </Suspense>
        </Container>
    )
})

export default Services;