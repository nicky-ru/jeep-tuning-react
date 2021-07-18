import React from "react";
import {observer} from "mobx-react-lite";
import {Container, Heading, Wrap, WrapItem} from "@chakra-ui/layout";
import {Image} from '@chakra-ui/react';
import {useSelector} from "react-redux";

export const Brands = observer(() => {
    const brands = useSelector((state => state.brands));

    return(
        <Container
            my={'1rem'}
            maxW="container.lg"
        >
            <Heading marginBottom={'1.2rem'}>
                Марки, которые мы обслуживаем
            </Heading>
            <Wrap spacing="30px" justify="center">
                {Object.values(brands).length > 0 && Object.values(brands).map((brand) => (
                    <WrapItem key={brand.name}>
                        <Image
                            borderRadius="full"
                            boxSize="100px"
                            fallbackSrc="https://via.placeholder.com/100"
                            src={brand.imgUrl}
                            alt={brand.name}
                            fit={"contain"}
                        />
                    </WrapItem>
                ))}
            </Wrap>
        </Container>
    );
})