import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Center} from "@chakra-ui/layout";

export const Footer = observer(() => {
    return(
        <Container>
            <Center h={'200px'}>2021 Все права защищены</Center>
        </Container>
    )
})