import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Divider} from "@chakra-ui/layout";
import {Jumbotron} from "../../components/Home/jumbotron";
import {Services} from "../../components/Home/services";
import {WhyUs} from "../../components/Home/whyUs";
import {Brands} from "../../components/Home/brands";
import {Contacts} from "../../components/Home/contacts";
import {useDispatch} from "react-redux";

import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listAdvantages} from "../../graphql/queries";

import awsExports from "../../aws-exports";
import {getAdvantages} from "../../redux/actions/advantages";
Amplify.configure(awsExports);

export const Home = observer(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAdvantages();
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

    return(
        <>
            <Jumbotron/>
            <Services/>
            <Divider/>
            <WhyUs/>
            <Divider/>
            <Brands/>
            <Divider/>
            <Contacts/>
            <Divider/>
        </>
    )
})