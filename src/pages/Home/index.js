import React, {useEffect, Suspense, lazy} from "react";
import {observer} from "mobx-react-lite";
import {Divider} from "@chakra-ui/layout";
import {useDispatch} from "react-redux";

import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listAdvantages, listBrands, listServices, listUzels} from "../../graphql/queries";

import awsExports from "../../aws-exports";
import {getAdvantages} from "../../redux/actions/advantages";
import {listServices as listServicesFromStore} from "../../redux/actions/services";
import {listBrands as listBrandsFromStore} from "../../redux/actions/brands";
import {getUzelList} from "../../redux/actions/uzel";

import {Jumbotron} from "../../components/Home/jumbotron";
// import {Services} from "../../components/Home/services";
// import {WhyUs} from "../../components/Home/whyUs";
// import {Brands} from "../../components/Home/brands";
// import {Contacts} from "../../components/Home/contacts";

const Services = lazy(() => import("../../components/Home/services"));
const WhyUs = lazy(() => import("../../components/Home/whyUs"));
const Brands = lazy(() => import("../../components/Home/brands"));
const Contacts = lazy(() => import("../../components/Home/contacts"));

Amplify.configure(awsExports);

const Home = observer(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAdvantages();
        fetchUzels();
        fetchServices();
        fetchBrands();
    }, []);

    const fetchAdvantages = async () => {
        try {
            const advantagesData = await API.graphql(graphqlOperation(listAdvantages));
            const advantages = advantagesData.data.listAdvantages.items;
            dispatch(getAdvantages(advantages));
        } catch (e) {
            console.log("Error while getting advantages: ", e);
        }
    }

    const fetchServices = async () => {
        try {
            const servicesData = await API.graphql(graphqlOperation(listServices));
            const services = servicesData.data.listServices.items;
            dispatch(listServicesFromStore(services));
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

    const fetchBrands = async () => {
        try {
            const brandsData = await API.graphql(graphqlOperation(listBrands));
            const brands = brandsData.data.listBrands.items;
            dispatch(listBrandsFromStore(brands));
        } catch (e) {
            console.log("Error while fetching brands: ", e);
        }
    }

    return(
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Jumbotron/>
                <Services/>
                <Divider/>
                <WhyUs/>
                <Divider/>
                <Brands/>
                <Divider/>
                <Contacts/>
                <Divider/>
            </Suspense>
        </>
    )
})

export default Home;