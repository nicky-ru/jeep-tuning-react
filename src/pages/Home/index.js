import React from "react";
import {observer} from "mobx-react-lite";
import {Divider} from "@chakra-ui/layout";
import {Jumbotron} from "../../components/Home/jumbotron";
import {Services} from "../../components/Home/services";
import {WhyUs} from "../../components/Home/whyUs";
import {Brands} from "../../components/Home/brands";
import {Contacts} from "../../components/Home/contacts";

export const Home = observer(() => {
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
        </>
    )
})