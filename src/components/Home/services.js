import React from "react";
import {observer} from "mobx-react-lite";
import {Container, VStack, Link, Heading, Box, Text} from "@chakra-ui/layout";
import {Button} from '@chakra-ui/react';
import {Link as ReachLink} from 'react-router-dom';

export const Services = observer(() => {
    return(
        <Container
            maxW="container.lg"
            my={'1rem'}
        >
            <Heading marginBottom={'1.2rem'}>Наши услуги</Heading>
            <VStack
                spacing={4}
                align="stretch"
            >
                <Box key={'first'}
                     border={"1px"}
                     borderColor={"dark.100"}
                     borderRadius={16}
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between">
                    <Text marginLeft={"10px"} isTruncated>{'first'}</Text>
                    <Link
                        as={ReachLink}
                        to={`/service/${'first'}`}
                        params={{ service: 'first' }}>
                        <Button type={"button"}>Записаться</Button>
                    </Link>
                </Box>
                <Box key={'sec'}
                     border={"1px"}
                     borderColor={"dark.100"}
                     borderRadius={16}
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between">
                    <Text marginLeft={"10px"} isTruncated>{'first'}</Text>
                    <Link
                        as={ReachLink}
                        to={`/service/${'first'}`}
                        params={{ service: 'first' }}>
                        <Button type={"button"}>Записаться</Button>
                    </Link>
                </Box>
                <Button>Все услуги</Button>
            </VStack>

        </Container>
    );
})