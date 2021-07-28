import {Heading, Center, Box, Stack, Input, useColorModeValue} from "@chakra-ui/react";
import Image from "next/image"
import React from "react";

const Jumbotron = () => {
    const border = useColorModeValue("light.300", "dark.100");
    const bg = useColorModeValue("dark.500", "light.500");

    return (
        <Box
            mt={16}
            h={["2xs", "md"]}
            bg={'dark.100'}
            position={"relative"}
            zIndex={0}
        >
            <Image
                src={'/images/bkg.webp'}
                alt={'background'}
                layout={'fill'}
                objectFit={["contain", "cover"]}
                priority={true}
                objectPosition={'right top'}
            />
            <Center
                h={"full"}
            >
                <Stack
                    direction={'column'}
                    borderRadius={'md'}
                    px={[4, 10]}
                    py={[2, 5]}
                    mx={[4, 0]}
                    textAlign={'center'}
                    bg={bg}
                    css={{
                        backdropFilter: 'saturate(180%) blur(5px)',
                    }}
                >
                    <Heading>Лучший автосервис в регионе 76</Heading>
                    <Heading size={'md'}>Какая услуга вас интересует?</Heading>
                    <Input
                        placeholder="Поиск по услугам"
                        borderColor={border}
                    />
                </Stack>
            </Center>
        </Box>
    );
}

export default Jumbotron