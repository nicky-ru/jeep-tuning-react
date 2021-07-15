import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Heading, Wrap, WrapItem, Center, Text} from "@chakra-ui/layout";
import {useSelector} from "react-redux";

export const WhyUs = observer(() => {
    const advantages = useSelector(state => state.advantages);

    return(
        <Container
            my={'1rem'}
            maxW="container.lg"
        >
            <Heading marginBottom={'1.2rem'}>Почему мы</Heading>
            <Wrap spacing="30px" justify="center">
                {advantages.list.map((advantage) => (
                    <WrapItem key={advantage}>
                        <Center
                            w="200px"
                            h="100px"
                            bg={'dark.100'}
                            borderRadius={'md'}
                        >
                            <Text align={'center'}>{advantage}</Text>
                        </Center>
                    </WrapItem>
                ))}
            </Wrap>
        </Container>
    );
})