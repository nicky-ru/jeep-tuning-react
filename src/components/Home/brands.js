import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Heading, Wrap, WrapItem} from "@chakra-ui/layout";
import {Image} from '@chakra-ui/react';

export const Brands = observer(() => {
    return(
        <Container
            my={'1rem'}
            maxW="container.lg"
        >
            <Heading marginBottom={'1.2rem'}>
                Марки, которые мы обслуживаем
            </Heading>
            <Wrap spacing="30px" justify="center">
                <WrapItem>
                    <Image
                        borderRadius="full"
                        boxSize="100px"
                        src="https://www.carlogos.org/car-logos/tesla-logo.png"
                        alt="Tesla"
                    />
                </WrapItem>
                <WrapItem>
                    <Image
                        borderRadius="full"
                        boxSize="100px"
                        src="https://www.carlogos.org/car-logos/bmw-logo.png"
                        alt="BMW"
                    />
                </WrapItem>
                <WrapItem>
                    <Image
                        borderRadius="full"
                        boxSize="100px"
                        src="https://www.carlogos.org/car-logos/ferrari-logo.png"
                        alt="Ferrari"
                    />
                </WrapItem>
                <WrapItem>
                    <Image
                        borderRadius="full"
                        boxSize="100px"
                        src="https://www.carlogos.org/car-logos/ford-logo.png"
                        alt="Ford"
                    />
                </WrapItem>
            </Wrap>
        </Container>
    );
})