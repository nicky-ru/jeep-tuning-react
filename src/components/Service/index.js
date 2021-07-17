import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Stack, Box, Heading, Text, Badge, Center, StackDivider} from "@chakra-ui/layout";
import {Link} from 'react-router-dom';
import {Button} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export const ServiceInfo = observer(() => {
    const service = useSelector(state => state.service);
    const uzels = useSelector(state => state.uzels);

    return(
        <Container maxW="container.lg" h={'90vh'}>
            <Stack
                direction={["column", "row"]}
                spacing="24px"
                h={'100%'}
                divider={<StackDivider borderColor="gray.200" />}
            >

                <Center h={'100%'}>
                    <Box>
                        {service &&
                        <>
                            <Heading mb={'0.5rem'}>{service.name}</Heading>
                            <Heading mb={'1rem'} size={'sm'}>{uzels[service.uzelID]}</Heading>
                            <Text mb={'1rem'}>{service.description}</Text>
                            <Text>Цена от: <Badge ml="1" colorScheme="green">{service.price} руб.</Badge></Text>
                        </>
                        }
                    </Box>
                </Center>

                <Center h={'100%'}>
                    <Button>Записаться</Button>
                </Center>
            </Stack>
        </Container>
    )
})