import React from "react";
import {observer} from "mobx-react-lite";
import {Jumbotron} from "../../components/Home/jumbotron";
import {Services} from "../../components/Home/services";

export const Home = observer(() => {
    return(
        <>
            <Jumbotron/>
            <Services/>
        </>
    )
})