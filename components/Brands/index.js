import {Container, Heading, Wrap, WrapItem, Center, Stack} from "@chakra-ui/layout";
import {keyframes, useBreakpointValue, useColorModeValue} from "@chakra-ui/react";
import Image from 'next/image'
import React from "react";
import logo_black from "../../public/logo/Black.svg"

const slideSm = keyframes`
    from {opacity: 10%;}
    to {opacity: 100%;;}
`

const Brands = ({brands = []}) => {
    const bg = useColorModeValue("light.100", 'dark.100');
    const logoSize = useBreakpointValue({base: 7, md: 9, lg: 20})

    return(
        <Container
            id={"brands-section"}
            my={4}
            maxW="full"
            overflow={"hidden"}
        >
            <Container maxW={"container.lg"}>
                <Heading marginBottom={5}>
                    Марки, с которыми мы работаем
                </Heading>
            </Container>
            <Wrap
                spacing={8}
                justify="center"
                // bg={bg}
                overflow={"hidden"}
                // p={5}
                borderRadius={'md'}
                // position={"relative"}
            >
                {brands.map((brand) => (
                        <WrapItem key={brand.name} animation={`${slideSm} 5s infinite linear alternate`}>
                            <Center
                                h={logoSize}
                                w={logoSize}
                                position={'relative'}
                            >
                                <Image
                                    src={brand.image? brand.image : logo_black}
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