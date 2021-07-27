import {Heading, Center, Box, Stack, Input, useColorMode} from "@chakra-ui/react";
import Image from "next/image"
import React from "react";

const Jumbotron = () => {
    const {colorMode} = useColorMode();
    return (
        <Box
            mt={"60px"}
            h={{base: '12rem', md: '400px'}}
            bg={'dark.100'}
            position={"relative"}
            zIndex={0}
        >
            <Image
                src={'/images/bkg.webp'}
                layout={'fill'}
                objectFit={{base: 'contain', md: 'cover'}}
                priority={true}
                objectPosition={'right top'}
            />
            <Center
                h={'100%'}
            >
                <Stack
                    direction={'column'}
                    borderRadius={'md'}
                    px={{base: "1rem", md: 10}}
                    py={{base: "0.5rem", md: 5}}
                    mx={{base: "1rem", md: 0}}
                    textAlign={'center'}
                    bg={colorMode === "light" ? "dark.500" : "light.500"}
                    css={{
                        backdropFilter: 'saturate(180%) blur(5px)',
                    }}
                >
                    <Heading>Лучший автосервис в регионе 76</Heading>
                    <Heading size={'md'}>Какая услуга вас интересует?</Heading>
                    <Input
                        placeholder="Поиск по услугам"
                        borderColor={colorMode === "light" ? "light.300" : "dark.100"}
                    />
                </Stack>
            </Center>
        </Box>
    );
}

export default Jumbotron