import {Heading, Center, useColorModeValue, Box, Container, Stack} from "@chakra-ui/react";
import Image from "next/image"
import SearchBar from "./searchBar";

const Jumbotron = () => {
    return(
        <Box h={{base: '12rem', md: '400px'}} bg={'dark.100'}>
            <Container
                h={'100%'}
                maxW={'100%'}
                position={'relative'}
                zIndex={-1}
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
                        textAlign={'center'}
                        css={{
                            backdropFilter: 'saturate(180%) blur(5px)',
                            backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
                        }}
                    >
                        <Heading
                            zIndex={0}
                            px={'1rem'}
                            py={'0.5rem'}
                        >Лучший автосервис в регионе 76</Heading>
                        <Heading
                            zIndex={0}
                            size={'md'}
                        >Какая услуга вас интересует?</Heading>
                        <Box>
                            <SearchBar/>
                        </Box>
                    </Stack>
                </Center>
            </Container>
        </Box>
    );
}

export default Jumbotron