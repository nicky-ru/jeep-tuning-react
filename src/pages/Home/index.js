import React from "react";
import {observer} from "mobx-react-lite";
import {Divider} from "@chakra-ui/layout";
import {Jumbotron} from "../../components/Home/jumbotron";
import {Services} from "../../components/Home/services";
import {WhyUs} from "../../components/Home/whyUs";

export const Home = observer(() => {
    return(
        <>
            <Jumbotron/>
            <Services/>
            <Divider/>
            <WhyUs/>
        </>
    )
})