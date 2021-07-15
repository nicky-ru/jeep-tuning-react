import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Heading, Wrap, WrapItem, Center, Text} from "@chakra-ui/layout";

export const WhyUs = observer(() => {
    return(
        <Container
            my={'1rem'}
            maxW="container.lg"
        >
            <Heading marginBottom={'1.2rem'}>Почему мы</Heading>
            <Wrap spacing="30px" justify="center">
                <WrapItem>
                    <Center
                        w="200px"
                        h="100px"
                        bg={'dark.100'}
                        borderRadius={'md'}
                    >
                        <Text align={'center'}>Гарантия на все выполненные работы</Text>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center
                        w="200px"
                        h="100px"
                        bg={'dark.100'}
                        borderRadius={'md'}
                    >
                        <Text align={'center'}>Гарантия на все выполненные работы</Text>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center
                        w="200px"
                        h="100px"
                        bg={'dark.100'}
                        borderRadius={'md'}
                    >
                        <Text align={'center'}>Гарантия на все выполненные работы</Text>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center
                        w="200px"
                        h="100px"
                        bg={'dark.100'}
                        borderRadius={'md'}
                    >
                        <Text align={'center'}>Гарантия на все выполненные работы</Text>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center
                        w="200px"
                        h="100px"
                        bg={'dark.100'}
                        borderRadius={'md'}
                    >
                        <Text align={'center'}>Гарантия на все выполненные работы</Text>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center
                        w="200px"
                        h="100px"
                        bg={'dark.100'}
                        borderRadius={'md'}
                    >
                        <Text align={'center'}>Гарантия на все выполненные работы</Text>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center
                        w="200px"
                        h="100px"
                        bg={'dark.100'}
                        borderRadius={'md'}
                    >
                        <Text align={'center'}>Гарантия на все выполненные работы</Text>
                    </Center>
                </WrapItem>
            </Wrap>
        </Container>
    );
})