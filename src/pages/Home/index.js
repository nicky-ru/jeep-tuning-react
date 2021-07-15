import React from "react";
import {observer} from "mobx-react-lite";
import {FastAction} from "../../components/Home/fastAction";
import {Jumbotron} from "../../components/Home/jumbotron";

export const Home = observer(() => {
    return(
        <>
            <Jumbotron/>
            <FastAction/>
        </>
    )
})