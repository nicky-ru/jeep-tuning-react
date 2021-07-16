import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Stack, Box, Heading, Text, Badge, Center} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export const ServiceInfo = observer(() => {
    const service = useSelector(state => state.service);
    const uzels = useSelector(state => state.uzels);

    return(
        <Container>
            <Stack direction={["column", "row"]} spacing="24px">
                <Box>
                    {service &&
                        <>
                            <Heading>{service.name}</Heading>
                            <Heading size={'sm'}>{uzels[service.uzelID]}</Heading>
                            <Text>{service.description}</Text>
                            <Text>Приблизительная цена: <Badge ml="1" colorScheme="green">{service.price} rub</Badge></Text>
                        </>
                    }
                </Box>
                <Center>
                    <Button>Записаться</Button>
                </Center>
            </Stack>
        </Container>
    )
})