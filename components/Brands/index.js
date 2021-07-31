import {Container, Heading, Wrap, WrapItem, Center, Stack} from "@chakra-ui/layout";
import {useColorModeValue} from "@chakra-ui/react";
import Image from 'next/image'
import React from "react";

const Brands = ({brands = []}) => {
    const bg = useColorModeValue("light.100", 'dark.100');

    return(
        <Container
            my={4}
            maxW="container.lg"
        >
            <Heading marginBottom={5}>
                Марки, с которыми мы работаем
            </Heading>
            <Wrap
                spacing={8}
                justify="center"
                bg={bg}
                p={5}
                borderRadius={'md'}
            >
                {brands.map((brand) => (
                        <WrapItem key={brand.name}>
                            <Center
                                h={[6, 20]}
                                w={[6, 20]}
                                position={'relative'}
                            >
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    placeholder={'blur'}
                                    blurDataURL={"https://via.placeholder.com/100"}
                                    layout={'fill'}
                                    objectFit={'contain'}
                                />
                            </Center>
                        </WrapItem>
                    )
                )}
            </Wrap>
        </Container>
    );
}

export default Brands;