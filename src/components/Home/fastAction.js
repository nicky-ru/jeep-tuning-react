import React from "react";
import {observer} from "mobx-react-lite";
import {Button, Container, Box, Image} from "@chakra-ui/react";

export const FastAction = observer(() => {
    return(
        <Container>
            <Box
                // h={'200px'}
                paddingTop={'50px'}
                paddingBottom={'50px'}
                paddingLeft={'10px'}
                // bg={'tomato'}
            >
                <Button size={'lg'}>Записаться</Button>
            </Box>
        </Container>
    );
})